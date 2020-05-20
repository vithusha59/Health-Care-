package com.example.eChanneling.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.eChanneling.entities.Doctor;
import com.example.eChanneling.exceptions.ResourceNotFoundException;
import com.example.eChanneling.repositories.DoctorRepository;
@Service
public class DoctorService {
	@Autowired
	private DoctorRepository doctorRepository;
	
	

	public List<Doctor> getAllDoctors() {
		return doctorRepository.findAll();
	}

	public Doctor createDoctors(@Valid Doctor doctor) {
		return doctorRepository.save(doctor);
	}

	public Doctor getNoteById(Long doctorId) {
		return doctorRepository.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "id", doctorId));

	}

	public Doctor updateDoctor(Long doctorId, @Valid Doctor doctorDetails) {
		Doctor doctor = doctorRepository.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor", "id", doctorId));

		doctor.setFirstName(doctorDetails.getFirstName());
		doctor.setLastName(doctorDetails.getLastName());
		doctor.setPhone(doctorDetails.getPhone());
		doctor.setEmail(doctorDetails.getEmail());
		doctor.setSpecialistIn(doctorDetails.getSpecialistIn());
		doctor.setLanguages(doctorDetails.getLanguages());

		Doctor updatedDoctor = doctorRepository.save(doctor);
		return updatedDoctor;

	}

	public ResponseEntity<?> deleteDoctor(Long doctorId) {
		Doctor doctor = doctorRepository.findById(doctorId)
				.orElseThrow(() -> new ResourceNotFoundException("Note", "id", doctorId));

		doctorRepository.delete(doctor);

		return ResponseEntity.ok().build();
	}

	

}

package com.example.eChanneling.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eChanneling.entities.Doctor;
import com.example.eChanneling.services.DoctorService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class DoctorController {
	@Autowired
	private DoctorService doctorService;

	// Get All Doctors
	@GetMapping("/doctor")
	public List<Doctor> getAllDoctors() {
		return doctorService.getAllDoctors();
	}
	

	// Post doctor
	@PostMapping("/doctor")
	public Doctor createDoctors(@Valid @RequestBody Doctor doctor) {
		return doctorService.createDoctors(doctor);
	}

	// Get a Single Doctor
	@GetMapping("/doctor/{id}")
	public Doctor getNoteById(@PathVariable(value = "id") Long doctorId) {
		return doctorService.getNoteById(doctorId);
				
	}

	// Update a Doctor
	@PutMapping("/doctor/{id}")
	public Doctor updateDoctor(@PathVariable(value = "id") Long doctorId, @Valid @RequestBody Doctor doctorDetails) {

		return doctorService.updateDoctor(doctorId,doctorDetails);
		
	}

	// Delete a Doctor
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<?> deleteDoctor(@PathVariable(value = "id") Long doctorId) {
		return doctorService.deleteDoctor(doctorId);
		
	}

}

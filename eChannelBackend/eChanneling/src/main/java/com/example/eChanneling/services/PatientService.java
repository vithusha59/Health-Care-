package com.example.eChanneling.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eChanneling.entities.Patient;
import com.example.eChanneling.repositories.PatientRepository;
@Service
public class PatientService {
	@Autowired
	private PatientRepository patientRepository;

	public List<Patient> getAllPatients() {
		return patientRepository.findAll();
	}

	public Patient createPatients(@Valid Patient patient) {
		return patientRepository.save(patient);
	}

}

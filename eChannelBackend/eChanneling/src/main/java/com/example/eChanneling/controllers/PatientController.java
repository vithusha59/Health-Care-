package com.example.eChanneling.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eChanneling.entities.Patient;
import com.example.eChanneling.services.PatientService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PatientController {
	@Autowired
	private PatientService patientService;

	// Get All Patients
		@GetMapping("/patient")
		public List<Patient> getAllPatients() {
			return patientService.getAllPatients();
		}
		
		// Post a patient
		@PostMapping("/patient")
		public Patient createPatients(@Valid @RequestBody Patient patient) {
			return patientService.createPatients(patient);
		}
		
		
		
}

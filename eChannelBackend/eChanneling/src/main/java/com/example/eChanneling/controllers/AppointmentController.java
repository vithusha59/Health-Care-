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


import com.example.eChanneling.entities.Appointment;
import com.example.eChanneling.services.AppointmentService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AppointmentController {
	@Autowired
	private AppointmentService appointmentService;

	// Get All Patients
	@GetMapping("/appointment")
	public List<Appointment> getAllDoctors() {
		return appointmentService.getAllDoctors();
	}

	// post appointments
	@PostMapping("/appointment")
	public Appointment postAppointment(@Valid @RequestBody Appointment appointment) {
		return appointmentService.postAppointment(appointment);
	}
}

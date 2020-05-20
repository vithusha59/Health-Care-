package com.example.eChanneling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eChanneling.entities.Appointment;
import com.example.eChanneling.repositories.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepository;

	public List<Appointment> getAllDoctors() {
		return appointmentRepository.findAll();
	}

	public Appointment postAppointment(Appointment appointment) {
		
		
		return appointmentRepository.save(appointment);
	}

	

}

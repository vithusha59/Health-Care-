package com.example.eChanneling.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eChanneling.dtos.PatientLoginDto;
import com.example.eChanneling.entities.Admin;
import com.example.eChanneling.services.LoginService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LoginController {
	@Autowired
	private LoginService loginService;

	@PostMapping("/patientLogin")
	public String patientLogin(@Valid @RequestBody PatientLoginDto patientLoginDto) {
		return loginService.patientLogin(patientLoginDto);
		
	}
	@PostMapping("/adminLogin")
	public String adminLogin(@Valid @RequestBody Admin admin) {
		return loginService.adminLogin(admin);
	}
}

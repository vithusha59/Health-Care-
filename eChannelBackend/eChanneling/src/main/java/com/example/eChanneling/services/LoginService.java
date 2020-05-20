package com.example.eChanneling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eChanneling.dtos.PatientLoginDto;
import com.example.eChanneling.entities.Admin;
import com.example.eChanneling.entities.Patient;
import com.example.eChanneling.repositories.AdminRepository;
import com.example.eChanneling.repositories.PatientRepository;

@Service
public class LoginService {
	@Autowired
//	private LoginRepository loginRepository;
	private PatientRepository patientRepository;
	@Autowired
	private AdminRepository adminRepository;

	public String patientLogin(PatientLoginDto patientLoginDto) {
		String patientNic = patientLoginDto.getNic();
		String patientPass = patientLoginDto.getPassword();
		List<Patient> patient = patientRepository.findByNic(patientNic);

		String valid;
		String patientDbPass = "p";
		String patientDbNic = "n";

		for (Patient name : patient) {
			patientDbPass = name.getPassword();
			patientDbNic = name.getNic();
		}
		if (patientNic.equals(patientDbNic)) {
			if (patientPass.equals(patientDbPass)) {
				valid = "true";
			} else {
				valid = "false";
			}

		} else {
			valid = "user does not exist";
		}

		return valid;
	}

	public String adminLogin(Admin admin) {
		String adminNic = admin.getNic();
		String adminPass = admin.getPassword();
		List<Admin> adminDb = adminRepository.findByNic(adminNic);

		String valid;
		String adminDbPass = "p";
		String adminDbNic = "n";

		for (Admin name : adminDb) {
			adminDbPass = name.getPassword();
			adminDbNic = name.getNic();
		}
		if (adminNic.equals(adminDbNic)) {
			if (adminPass.equals(adminDbPass)) {
				valid = "true";
			} else {
				valid = "false";
			}

		} else {
			valid = "admin does not exist";
		}

		return valid;
	}

}

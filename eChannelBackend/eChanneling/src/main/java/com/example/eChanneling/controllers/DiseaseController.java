package com.example.eChanneling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eChanneling.entities.Disease;
import com.example.eChanneling.services.DiseaseService;

@RestController
@RequestMapping("/api")
public class DiseaseController {
	@Autowired
	private DiseaseService diseaseService;

	//Get All Diseases
	@GetMapping("/disease")
	public List<Disease> getAllDisease() {
		return diseaseService.getAllDisease();
	}
	
	
}

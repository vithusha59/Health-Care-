package com.example.eChanneling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eChanneling.entities.Disease;
import com.example.eChanneling.repositories.DiseaceRepo;
@Service
public class DiseaseService {
	@Autowired
	private DiseaceRepo diseaceRepo;



	public List<Disease> getAllDisease() {
		return diseaceRepo.findAll();
	}

}

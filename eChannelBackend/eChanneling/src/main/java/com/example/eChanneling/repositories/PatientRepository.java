package com.example.eChanneling.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eChanneling.entities.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

	List<Patient> findByNic(String nic);

}

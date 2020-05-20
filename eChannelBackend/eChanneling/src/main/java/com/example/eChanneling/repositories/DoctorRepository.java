package com.example.eChanneling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eChanneling.entities.Doctor;
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}

package com.example.eChanneling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eChanneling.entities.Appointment;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}

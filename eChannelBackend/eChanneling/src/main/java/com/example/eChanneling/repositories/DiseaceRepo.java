package com.example.eChanneling.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.eChanneling.entities.Disease;
@Repository
public interface DiseaceRepo extends JpaRepository<Disease, Long>{

}

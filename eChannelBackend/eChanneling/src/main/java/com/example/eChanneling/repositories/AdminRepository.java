package com.example.eChanneling.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eChanneling.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>  {
List<Admin> findByNic(String nic);
}

package com.example.eChanneling;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class EChannelingApplication {

	public static void main(String[] args) {
		SpringApplication.run(EChannelingApplication.class, args);
	}

}

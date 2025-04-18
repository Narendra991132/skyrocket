package com.nci.skeleton.repository;

import com.nci.skeleton.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface FlightRepository extends JpaRepository<Flight, UUID> {
}

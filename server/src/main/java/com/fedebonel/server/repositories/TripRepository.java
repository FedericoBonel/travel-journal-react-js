package com.fedebonel.server.repositories;

import com.fedebonel.server.models.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer> {
    Optional<Trip> findByCountry_NameIgnoreCase(String countryName);
}

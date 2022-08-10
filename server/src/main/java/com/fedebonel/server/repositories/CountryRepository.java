package com.fedebonel.server.repositories;

import com.fedebonel.server.models.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {
    Optional<Country> findByNameIgnoreCase(String name);
}

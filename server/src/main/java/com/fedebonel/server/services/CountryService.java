package com.fedebonel.server.services;

import com.fedebonel.server.models.Country;

import java.util.List;

public interface CountryService {
    List<String> getCountryNames();

    Country getById(Integer id);

    Country getByName(String name);

    Country save(Country country);

    void delete(Country country);
}

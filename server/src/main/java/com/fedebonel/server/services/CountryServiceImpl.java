package com.fedebonel.server.services;

import com.fedebonel.server.models.Country;
import com.fedebonel.server.repositories.CountryRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<String> getCountryNames() {
        List<String> result = new LinkedList<>();

        for (Country country : countryRepository.findAll(Sort.by("name"))) {
            result.add(country.getName());
        }

        return result;
    }

    @Override
    public Country getById(Integer id) {
        return countryRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public Country getByName(String name) {
        return countryRepository
                .findByNameIgnoreCase(name)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public Country save(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public void delete(Country country) {
        countryRepository.deleteById(country.getId());
    }
}

package com.fedebonel.server.controllers;

import com.fedebonel.server.services.CountryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(CountryController.COUNTRIES_URI)
@Slf4j
public class CountryController {

    public static final String COUNTRIES_URI = "/api/v1/countries";
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<String> getCountries() {
        log.info("Getting all country names");

        return countryService.getCountryNames();
    }
}

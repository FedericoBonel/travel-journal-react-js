package com.fedebonel.server.datainitializer;

import com.fedebonel.server.models.Countries;
import com.fedebonel.server.models.Country;
import com.fedebonel.server.models.Trip;
import com.fedebonel.server.repositories.CountryRepository;
import com.fedebonel.server.repositories.TripRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final TripRepository tripRepository;
    private final CountryRepository countryRepository;

    public DataInitializer(TripRepository tripRepository, CountryRepository countryRepository) {
        this.tripRepository = tripRepository;
        this.countryRepository = countryRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        if (countryRepository.count() == 0) {
            initializeCountries();
        }
        if (tripRepository.count() == 0) {
            initializeTrips();
        }
    }

    private void initializeCountries() {
        List<Country> toSave = new LinkedList<>();
        for (Countries country : Countries.values()) {
            Country countryToStore = new Country();
            String countryName = country.name().replaceAll("(.)([A-Z])", "$1 $2");
            countryToStore.setName(countryName);
            toSave.add(countryToStore);
        }
        countryRepository.saveAll(toSave);
    }

    private void initializeTrips() {
        Trip trip1 = new Trip();
        trip1.setCountry(countryRepository.findByNameIgnoreCase("Japan").orElseThrow(RuntimeException::new));
        trip1.setDestinationName("Mount Fuji");
        trip1.setStartDate("2022-08-01T12:21:40+09:00");
        trip1.setFinishDate("2022-08-03T12:21:40+09:00");
        trip1.setImgUrl("https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzMzOTgxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080");
        trip1.setTripNotes("Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.");

        tripRepository.save(trip1);
    }
}

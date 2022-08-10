package com.fedebonel.server.services;

import com.fedebonel.server.converters.TripDTOToTrip;
import com.fedebonel.server.converters.TripToTripDTO;
import com.fedebonel.server.dtos.TripDTO;
import com.fedebonel.server.models.Country;
import com.fedebonel.server.models.Trip;
import com.fedebonel.server.repositories.TripRepository;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class TripServiceImpl implements TripService {

    private final TripRepository tripRepository;
    private final CountryService countryService;
    private final TripDTOToTrip toTrip;
    private final TripToTripDTO toTripDTO;

    public TripServiceImpl(TripRepository tripRepository,
                           CountryService countryService,
                           TripDTOToTrip toTrip,
                           TripToTripDTO toTripDTO) {
        this.tripRepository = tripRepository;
        this.countryService = countryService;
        this.toTrip = toTrip;
        this.toTripDTO = toTripDTO;
    }

    @Override
    public List<TripDTO> getAll() {
        List<TripDTO> result = new LinkedList<>();

        for (Trip trip : tripRepository.findAll()) {
            result.add(toTripDTO.convert(trip));
        }

        return result;
    }

    @Override
    public TripDTO getById(Integer id) {
        return toTripDTO.convert(tripRepository
                .findById(id)
                .orElseThrow(RuntimeException::new));
    }

    @Override
    public TripDTO getTripByCountry(String country) {
        return toTripDTO.convert(tripRepository
                .findByCountry_NameIgnoreCase(country)
                .orElseThrow(RuntimeException::new));
    }

    @Override
    public TripDTO save(TripDTO trip) {
        Trip toSave = toTrip.convert(trip);
        toSave.setId(null);

        Country savedCountry = countryService.getByName(trip.getCountry());
        toSave.setCountry(savedCountry);

        return toTripDTO.convert(tripRepository.save(toSave));
    }

    @Override
    public void delete(Integer tripId) {
        tripRepository.deleteById(tripId);
    }

    @Override
    public TripDTO updateById(Integer id, TripDTO trip) {
        Trip savedTrip = tripRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);

        if (trip.getCountry() != null) {
            Country savedCountry = countryService.getByName(trip.getCountry());
            savedTrip.setCountry(savedCountry);
        }
        if (trip.getDestinationName() != null) {
            savedTrip.setDestinationName(trip.getDestinationName());
        }
        if (trip.getTripNotes() != null) {
            savedTrip.setTripNotes(trip.getTripNotes());
        }
        if (trip.getStartDate() != null) {
            savedTrip.setStartDate(trip.getStartDate());
        }
        if (trip.getFinishDate() != null) {
            savedTrip.setFinishDate(trip.getFinishDate());
        }
        if (trip.getImgUrl() != null) {
            savedTrip.setImgUrl(trip.getImgUrl());
        }

        return toTripDTO.convert(tripRepository.save(savedTrip));
    }
}

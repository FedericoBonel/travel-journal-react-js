package com.fedebonel.server.controllers;

import com.fedebonel.server.dtos.TripDTO;
import com.fedebonel.server.services.TripService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(TripController.TRIPS_URI)
@Slf4j
public class TripController {

    public static final String TRIPS_URI = "/api/v1/trips";
    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TripDTO> getTrips() {
        log.info("Getting all trips");

        return tripService.getAll();
    }

    @GetMapping("/{tripId}")
    @ResponseStatus(HttpStatus.OK)
    public TripDTO getTripById(@PathVariable Integer tripId){
        log.info("Getting trip with id " + tripId);

        return tripService.getById(tripId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TripDTO createTrip(@RequestBody TripDTO trip){
        log.info("Creating trip with destination " + trip.getDestinationName());

        return tripService.save(trip);
    }
}

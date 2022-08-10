package com.fedebonel.server.services;

import com.fedebonel.server.dtos.TripDTO;
import com.fedebonel.server.models.Trip;

import java.util.List;

public interface TripService {
    List<TripDTO> getAll();
    TripDTO getById(Integer id);
    TripDTO getTripByCountry(String country);
    TripDTO save(TripDTO trip);
    void delete(Integer tripId);
    TripDTO updateById(Integer id, TripDTO trip);
}

package com.fedebonel.server.converters;

import com.fedebonel.server.dtos.TripDTO;
import com.fedebonel.server.models.Country;
import com.fedebonel.server.models.Trip;
import com.sun.istack.NotNull;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class TripDTOToTrip implements Converter<TripDTO, Trip> {

    @Override
    public Trip convert(@NotNull TripDTO source) {
        Trip result = new Trip();

        Country country = new Country();
        country.setName(source.getCountry());

        result.setId(source.getId());
        result.setCountry(country);
        result.setImgUrl(source.getImgUrl());
        result.setFinishDate(source.getFinishDate());
        result.setStartDate(source.getStartDate());
        result.setDestinationName(source.getDestinationName());
        result.setTripNotes(source.getTripNotes());

        return result;
    }
}

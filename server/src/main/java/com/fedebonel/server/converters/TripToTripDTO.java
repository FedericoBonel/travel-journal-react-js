package com.fedebonel.server.converters;

import com.fedebonel.server.dtos.TripDTO;
import com.fedebonel.server.models.Trip;
import com.sun.istack.NotNull;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class TripToTripDTO implements Converter<Trip, TripDTO> {
    @Override
    public TripDTO convert(@NotNull Trip source) {
        TripDTO result = new TripDTO();

        result.setId(source.getId());
        result.setCountry(source.getCountry().getName());
        result.setImgUrl(source.getImgUrl());
        result.setFinishDate(source.getFinishDate());
        result.setStartDate(source.getStartDate());
        result.setDestinationName(source.getDestinationName());
        result.setTripNotes(source.getTripNotes());

        return result;
    }
}

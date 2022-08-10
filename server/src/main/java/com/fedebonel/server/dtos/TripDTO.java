package com.fedebonel.server.dtos;
import lombok.Data;

@Data
public class TripDTO {
    private Integer id;
    private String destinationName;
    private String imgUrl;
    private String startDate;
    private String finishDate;
    private String tripNotes;
    private String country;
}

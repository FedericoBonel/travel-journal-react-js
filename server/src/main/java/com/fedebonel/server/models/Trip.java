package com.fedebonel.server.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "destination_name")
    private String destinationName;

    @Column(name = "img_url")
    private String imgUrl;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "finish_date")
    private String finishDate;

    @Column(name = "trip_notes")
    private String tripNotes;

    @ManyToOne(optional = false)
    private Country country;
}

package com.fedebonel.server.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(indexes = @Index(columnList = "name", unique = true))
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(name = "name")
    private String name;
}

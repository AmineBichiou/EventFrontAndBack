package com.example.event.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Participation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long eventId;
    private String emailParticipant;
    private int nbPlaces;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String registrationDate;

    public enum Status {
        pending, confirmed, cancelled
    }
}

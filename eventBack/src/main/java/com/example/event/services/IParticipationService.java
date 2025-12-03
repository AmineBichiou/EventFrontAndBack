package com.example.event.services;

import com.example.event.entities.Participation;

import java.util.List;

public interface IParticipationService {

    List<Participation> getAll();
    Participation getById(Long id);
    Participation add(Participation p);
    Participation update(Long id, Participation p);
    boolean delete(Long id);
}
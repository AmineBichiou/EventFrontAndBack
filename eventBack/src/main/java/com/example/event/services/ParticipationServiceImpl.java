package com.example.event.services;

import com.example.event.entities.Participation;
import com.example.event.repositories.ParticipationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ParticipationServiceImpl implements IParticipationService {

    private final ParticipationRepository repo;

    @Override
    public List<Participation> getAll() {
        return repo.findAll();
    }

    @Override
    public Participation getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Participation add(Participation p) {
        p.setRegistrationDate(LocalDateTime.now().toString());
        return repo.save(p);
    }

    @Override
    public Participation update(Long id, Participation p) {
        Participation existing = repo.findById(id).orElse(null);
        if (existing == null) return null;

        existing.setUserId(p.getUserId());
        existing.setEventId(p.getEventId());
        existing.setEmailParticipant(p.getEmailParticipant());
        existing.setNbPlaces(p.getNbPlaces());
        existing.setStatus(p.getStatus());

        return repo.save(existing);
    }

    @Override
    public boolean delete(Long id) {
        if (!repo.existsById(id)) return false;
        repo.deleteById(id);
        return true;
    }
}

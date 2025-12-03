package com.example.event.controllers;

import com.example.event.entities.Participation;
import com.example.event.services.IParticipationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/participations")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ParticipationController {

    private final IParticipationService service;

    @GetMapping
    public List<Participation> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Participation getOne(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Participation add(@RequestBody Participation p) {
        return service.add(p);
    }

    @PutMapping("/{id}")
    public Participation update(@PathVariable Long id, @RequestBody Participation p) {
        return service.update(id, p);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        return service.delete(id) ? "Deleted" : "Not Found";
    }
}

package de.neuefische.backend.controller;

import de.neuefische.backend.model.NewTrack;
import de.neuefische.backend.model.Track;
import de.neuefische.backend.service.TrackService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TrackController {

    private final TrackService trackService;

    @GetMapping("/tracks")
    public Iterable<Track> listTracks() {
        return trackService.listTracks();
    }

    @PostMapping("/add-track")
    @ResponseStatus(HttpStatus.CREATED)
    Track postTrack(@RequestBody NewTrack newTrack) {
        return trackService.saveTrack(newTrack);
    }
}

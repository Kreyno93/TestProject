package de.neuefische.backend.service;

import de.neuefische.backend.model.NewTrack;
import de.neuefische.backend.model.Track;
import de.neuefische.backend.repo.TrackRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TrackService {

    private final TrackRepo trackRepo;
    private final UUIDService uuidService;

    public Track saveTrack(NewTrack newTrack) {
        Track track = Track.builder()
                .trackName(newTrack.getTrackName())
                .id(uuidService.generateUUID())
                .build();
        return trackRepo.save(track);
    }

    public Iterable<Track> listTracks() {
        return trackRepo.findAll();
    }
}

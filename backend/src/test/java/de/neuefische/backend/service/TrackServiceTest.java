package de.neuefische.backend.service;

import de.neuefische.backend.model.Track;
import de.neuefische.backend.repo.TrackRepo;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TrackServiceTest {

    TrackRepo trackRepo = mock(TrackRepo.class);
    UUIDService uuidService = mock(UUIDService.class);

    TrackService trackService = new TrackService(trackRepo, uuidService);

    @Test
    void whenSavingTrack_thenTrackIsSaved() {

        Track testTrack = new Track("","TestTrack");

        when(uuidService.generateUUID()).thenReturn("1234");
        when(trackRepo.save(testTrack.withId("1234"))).thenReturn(testTrack.withId("1234"));

        Track actual = trackService.saveTrack(testTrack);

        assertEquals(testTrack.withId("1234"), actual);

    }


}
package de.neuefische.backend.repo;

import de.neuefische.backend.model.Track;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrackRepo extends MongoRepository<Track, String> {
}

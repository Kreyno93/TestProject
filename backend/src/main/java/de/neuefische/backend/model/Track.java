package de.neuefische.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Track {
    @Id
    @With
    private String id;
    private String trackName;
}

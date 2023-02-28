package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @DirtiesContext
    @Test
    void whenGettingTracks_ThenGetStatusOkAndEmptyList() throws Exception {
        mockMvc.perform(get("/api/tracks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @DirtiesContext
    @Test
    void whenPostingTrack_thenGetStatusOk() throws Exception {

        String jsonTrack = """
                {
                    "trackName": "TestTrack"
                }
                """;

        mockMvc.perform(post("/api/add-track")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonTrack))
                .andExpect(status().isCreated())
                .andExpect(content().json(jsonTrack));
    }
}
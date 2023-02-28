package de.neuefische.backend.service;

import org.springframework.stereotype.Service;

@Service
public class UUIDService {

    public String generateUUID() {
        return java.util.UUID.randomUUID().toString();
    }
}

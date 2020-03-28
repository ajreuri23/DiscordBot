package com.example.demo.Services;

import com.example.demo.Models.Quote;
import com.example.demo.Repositories.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;
import java.util.Random;

@Service
@CrossOrigin
public class QuoteService {
    @Autowired
    private QuoteRepository quoteRepository;

    public Optional<Quote> getRandomQuote() {
        Random rand = new Random();
        int random = (int) (Math.random() * (this.quoteRepository.count()) + 1);
        return this.quoteRepository.findById(random);
    }
}

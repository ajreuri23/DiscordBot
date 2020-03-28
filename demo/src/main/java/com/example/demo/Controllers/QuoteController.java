package com.example.demo.Controllers;
import com.example.demo.Models.Quote;
import com.example.demo.Services.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin
public class QuoteController {
    @Autowired
    private QuoteService quoteService;

    @GetMapping("")
    public Optional<Quote> getRandomQuote() {
        System.out.println(this.quoteService.getRandomQuote());
        return this.quoteService.getRandomQuote();
    }
}

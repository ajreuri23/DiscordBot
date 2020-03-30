package com.example.demo.Models;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "t_quotes")
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty
    @Column(name = "id")
    private Integer id;

    @JsonProperty
    @Column(name = "quote")
    private String quote;

    @Override
    public String toString() {
        return "Quote{" +
                "id=" + id +
                ", quote='" + quote + '\'' +
                '}';
    }

    public Boolean equals(Quote otherQuote) {
        if(this.quote.equals(otherQuote.getQuote())) {
            return true;
        }
        return false;
    }

    public Integer getId() {
        return id;
    }

    public String getQuote() {
        return quote;
    }
}

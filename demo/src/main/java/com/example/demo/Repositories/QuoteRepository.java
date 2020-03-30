package com.example.demo.Repositories;
import com.example.demo.Models.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Integer> {
    Optional<Quote> findById(Integer id);

    List<Quote> findAll();

    long count();
}

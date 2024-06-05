package com.muftah.books.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.muftah.books.models.Book;

//Repo is a bridge between the App and the Databse

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	
	List<Book> findAll();

}

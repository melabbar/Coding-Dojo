package com.muftah.books.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.muftah.books.models.Book;
import com.muftah.books.repositories.BookRepository;

//Service contains the logic of our application!
//Middleman between Repo and Controller
@Service
public class BookService {
	
	@Autowired //call everying in the Repo in this Service File
	private BookRepository bookRepo;
	
	//create
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
	
	//read one
	
	public Book findBookById(Long id) {
		Optional<Book> opBook = bookRepo.findById(id);
		if (opBook.isPresent()) {
			return opBook.get();
		}else {
			return null;//couldn't find it not ACTUALLY return nothing
		}
	}
	
	//read all
	
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	//EDIT 
	
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}

	//DELETE
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
	
}

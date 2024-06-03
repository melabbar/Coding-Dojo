package com.muftah.demo.controllers;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.muftah.demo.models.Books;
import com.muftah.demo.services.BookService;

@RestController
public class BooksApi {
	private final BookService bookService;

	public BooksApi(BookService bookService) {
		this.bookService = bookService;
	}

	@RequestMapping("/api/books")
	public List<Books> index() {
		return bookService.allBooks();
	}

	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Books create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "numOfPages") Integer numOfPages) {

		Books book = new Books(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}

	@GetMapping("/api/books/{id}")
	public Books show(@PathVariable("id") Long id) {
		Books book = bookService.findBook(id);
		return book;
	}

	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
	public Books update(
			@PathVariable("id") Long id, 
			@RequestParam(value = "title") String title,
			@RequestParam(value = "description") String desc, 
			@RequestParam(value = "language") String lang,
			@RequestParam(value = "pages") Integer numOfPages) {
		Books book = bookService.editBook(id, title, desc, lang, numOfPages);
		return book;
	}

	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
	}
}

package com.muftah.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.muftah.demo.models.Books;
import com.muftah.demo.services.BookService;

@Controller
public class BookController {

	@Autowired
	BookService bookServ;

	@GetMapping("/api/book/{bookId}")
	public String index(Model model, @PathVariable("bookId") Long bookId) {
		Books book = bookServ.findBook(bookId);
		model.addAttribute("book", book);
		return "show.jsp";
	}
	
	@RequestMapping("/books")
    public String index(Model model) {
        List<Books> books = bookServ.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
    }

}

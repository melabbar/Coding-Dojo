package com.muftah.burger.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.muftah.burger.models.Burger;
import com.muftah.burger.services.BurgerService;

import jakarta.validation.Valid;

@Controller
public class BurgerController {
	
	@Autowired
	private BurgerService burgerServ;
	
	@GetMapping("/")
	public String index(@ModelAttribute("burger")Burger burger, Model model) {
		List<Burger> allBurgers = burgerServ.allBurgers();
		model.addAttribute("allBurgers", allBurgers);
		return "index.jsp";
	}
	
	@PostMapping("/newBurger")
	public String createBurger(@Valid @ModelAttribute("burger")Burger burger, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}else {
			burgerServ.createBurger(burger);
			return "redirect:/";
		}
	}
}

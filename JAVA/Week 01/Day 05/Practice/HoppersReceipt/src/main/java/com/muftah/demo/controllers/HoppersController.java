package com.muftah.demo.controllers;

 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HoppersController {

	@RequestMapping("/")
	public String index(Model model) {
		String name = "Muftah Elabbar";
        String itemName = "PlayStation 5";
        double price = 875;
        String description = "Gaming Console.";
        String vendor = "The Game Store";
    
    	// Your code here! Add values to the view model to be rendered
        model.addAttribute("name", name);
        model.addAttribute("itemName", itemName);
        model.addAttribute("price", price);
        model.addAttribute("description", description);
        model.addAttribute("vendor", vendor);
    
        return "demo.jsp";
	}
}

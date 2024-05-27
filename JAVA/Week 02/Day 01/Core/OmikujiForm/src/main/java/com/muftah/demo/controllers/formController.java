package com.muftah.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class formController {

	@RequestMapping("/omikuji")
	public String index() {
		
		return "index.jsp";
	}
	
	@RequestMapping("/omikuji/show")
	public String showForm() {
		
		return "showForm.jsp";
	}
	@RequestMapping(value="/omiroute", method= RequestMethod.POST)
	public String omiroute(
			@RequestParam(value="number") int number,
			@RequestParam(value="in1") String in1,
			@RequestParam(value="in2") String in2,
			@RequestParam(value="in3") String in3,
			@RequestParam(value="in4") String in4,
			@RequestParam(value="in5") String in5,
			HttpSession session
			) {
		session.setAttribute("number",number);
		session.setAttribute("in1", in1);
		session.setAttribute("in2", in2);
		session.setAttribute("in3", in3);
		session.setAttribute("in4", in4);
		session.setAttribute("in5", in5);
		
		return "redirect:/omikuji/show";
	}
	
}

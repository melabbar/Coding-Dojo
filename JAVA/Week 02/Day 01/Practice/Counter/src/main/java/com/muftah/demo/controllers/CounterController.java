package com.muftah.demo.controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CounterController {
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		if( session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		}else {
			int num = (Integer) session.getAttribute("count");
			num++;
			session.setAttribute("count", num);
		}

		return "index.jsp";
	}
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		session.getAttribute("count");
				return "Counter.jsp";
	}
}

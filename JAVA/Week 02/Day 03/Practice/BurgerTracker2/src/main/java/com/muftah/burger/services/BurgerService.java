package com.muftah.burger.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.muftah.burger.models.Burger;
import com.muftah.burger.repositories.BurgerRepository;



@Service
public class BurgerService {

	@Autowired
	private BurgerRepository burgerRepo;
	
	
	public Burger createBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
	
	public List<Burger> allBurgers(){
		return burgerRepo.findAll();
	}
	
	public Burger findBurgerById(Long id) {
		Optional<Burger> opBurger = burgerRepo.findById(id);
		if (opBurger.isPresent()) {
			return opBurger.get();
		}else {
			return null;//couldn't find it not ACTUALLY return nothing
		}
	}
	
	public Burger updateBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
	
}

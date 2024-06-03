package com.muftah.burger.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.muftah.burger.models.Burger;

public interface BurgerRepository extends CrudRepository<Burger, Long> {

	
	List<Burger> findAll();
	
	
}

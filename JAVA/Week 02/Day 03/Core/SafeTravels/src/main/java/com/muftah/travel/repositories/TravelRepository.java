package com.muftah.travel.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.muftah.travel.models.Travel;

public interface TravelRepository extends CrudRepository<Travel, Long> {

	List<Travel> findAll();
	
}

package com.muftah.zookeeper;

public class Mammals {
	int energy;

	public Mammals(int energy) {
		super();
		this.energy=energy;
	}
	
	public String displayEnergy() {
		
		return"Energy: " + this.energy;
	}
	
	
}

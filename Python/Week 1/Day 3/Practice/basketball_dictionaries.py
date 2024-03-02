class Player:
    def __init__(self, dict):
        self.name = dict['name']
        self.age = dict['age']
        self.position = dict['position']
        self.team = dict['team']
    def show_info(self):
        print(f'name is {self.name} \n age is {self.age} \n postion is {self.position} \n team is {self.team}')
    
    #BONUS CHALLENGE
    
    @classmethod
    def create_team(cls, list):
        new_team = [Player(one_player) for one_player in list]
        return new_team
    
    
players = [
        {
    	    "name": "Kevin Durant", 
    	    "age":34, 
    	    "position": "small forward", 
    	    "team": "Brooklyn Nets"
        },
        {
    	    "name": "Jason Tatum", 
    	    "age":24, 
    	    "position": "small forward", 
    	    "team": "Boston Celtics"
        },
        {
    	    "name": "Kyrie Irving", 
    	    "age":32,
            "position": "Point Guard", 
    	    "team": "Brooklyn Nets"
        },
        {
    	    "name": "Damian Lillard", 
    	    "age":33,
            "position": "Point Guard", 
    	    "team": "Portland Trailblazers"
        },
        {
    	    "name": "Joel Embiid", 
    	    "age":32,
            "position": "Power Foward", 
    	    "team": "Philidelphia 76ers"
        },
        {
            "name": "DeMar DeRozan",
            "age": 32,
            "position": "Shooting Guard",
            "team": "Chicago Bulls"
        }
    ]



kevin = {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
}
jason = {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
}
kyrie = {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
}
    
kev = Player(kevin)
jay = Player(jason)
ky = Player(kyrie) 

kev.show_info()
jay.show_info()
ky.show_info()
#CHALLENGE NUMBER 3
mohsen_list = []
for any_player in players:
    mohsen_list.append(Player(any_player))

mohsen_list[0].show_info()


print(Player.create_team(players))


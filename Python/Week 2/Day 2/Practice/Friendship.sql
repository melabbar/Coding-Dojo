SELECT * FROM friendship_shema.users;
insert into friendship_shema.users (first_name, last_name) values('Amy','Giver'),('Eli','Byers'),('Marky','Mark'),('Big','Bird'),('Kermit','The Frog'),('Muftah','El');

insert into friendship_shema.friendships (user_id, friend_id) values (1,2),(1,4),(1,6);
insert into friendship_shema.friendships (user_id, friend_id) values (2,1),(2,3),(2,5);
insert into friendship_shema.friendships (user_id, friend_id) values (3,2),(3,5);
insert into friendship_shema.friendships (user_id, friend_id) values (4,3);
insert into friendship_shema.friendships (user_id, friend_id) values (5,1),(5,6);
insert into friendship_shema.friendships (user_id, friend_id) values (6,2),(6,3);


SELECT * FROM friendship_shema.friendships
JOIN friendship_shema.users on users.id = friendships.user_id
LEFT JOIN friendship_shema.users as user2 ON friendships.friend_id = user2.id;

SELECT friendship_shema.user2.first_name, friendship_shema.user2.last_name FROM friendship_shema.users
JOIN friendship_shema.friendships on friendship_shema.users.id = friendship_shema.friendships.user_id
JOIN friendship_shema.users AS user2 On friendship_shema.friendships.friend_id = user2.id
WHERE friendship_shema.users.id = 1;

SELECT COUNT(*) as friendship_count FROM friendship_shema.friendships;

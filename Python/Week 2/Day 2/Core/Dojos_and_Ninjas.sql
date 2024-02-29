SELECT * FROM dojos_and_ninjas_schema.dojos;
insert into dojos_and_ninjas_schema.dojos (name) values('Dojo 1','Dojo 2','Dojo 3');
DELETE FROM dojos_and_ninjas_schema.dojos;
SET SQL_SAFE_UPDATES = 0;
insert into dojos_and_ninjas_schema.dojos (name) values('Dojo 4','Dojo 5','Dojo 6');

SELECT name FROM dojos_and_ninjas_schema.dojos WHERE id = 9;

SELECT * FROM dojos_and_ninjas_schema.ninjas;
INSERT INTO dojos_and_ninjas_schema.ninjas (first_name, last_name, age, dojo_id) VALUES ('Sam','E',10,7),('Lauren','D',11,8),('Anthony','K',12,9),('Najem','E',16,7),('Kathrine','D',19,8),('Saif','R',12,9),('Muftah','E',10,7),('Mariem','B',11,8),('Medali','D',12,9);

SELECT * FROM dojos_and_ninjas_schema.ninjas WHERE dojo_id = 7;
SELECT * FROM dojos_and_ninjas_schema.ninjas WHERE dojo_id = 9;

SELECT * FROM ninjas
JOIN dojos ON dojos.id = ninjas.dojo_id
WHERE ninjas.id= 26 ;


SELECT * FROM ninjas
JOIN dojos ON dojos.id = ninjas.dojo_id;


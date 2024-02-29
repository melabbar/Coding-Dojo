SELECT * FROM schema_user.users;
INSERT INTO schema_user.users (first_name, last_name, email) VALUES('Muftah','Elabbar','m@m.com'),('Mohsen','Aljaziri','m@a.com'),('Najem','Khalil','a@m.com');

SELECT * FROM schema_user.users WHERE email ='m@m.com';
SELECT * FROM schema_user.users WHERE id=3;
UPDATE schema_user.users SET last_name = 'Pancakes' WHERE id = 3;
DELETE FROM schema_user.users WHERE id = 2;
SELECT * FROM schema_user.users ORDER BY first_name ASC;
SELECT * FROM schema_user.users ORDER BY first_name DESC;
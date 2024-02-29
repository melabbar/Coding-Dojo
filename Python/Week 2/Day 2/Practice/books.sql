SELECT * FROM books_schema.users;
insert into books_schema.users (name)values ('Jane Amsden'),('Emilu Dixon'),('Theodore Dostoevsky'),('William Shapiro'),('Lao Xiu');

select * from books_schema.books;
insert into books_schema.books (title,num_of_pages)
values ('C Sharp',300),('Java',300),('Python',300),('PHP',300),('Ruby',300);

update books_schema.books set title = 'C#' where id = 1;

update books_schema.users set name = 'Bill Shapiro' where id = 4;

select * from books_schema.favorites;
insert into books_schema.favorites (user_id,book_id) values (1,1),(1,2);
insert into books_schema.favorites (user_id,book_id) values (2,1),(2,2),(2,3);
insert into books_schema.favorites (user_id,book_id) values (3,1),(3,2),(3,3),(3,4);
insert into books_schema.favorites (user_id,book_id) values (4,1),(4,2),(4,3),(4,4),(4,5);

select * from books_schema.favorites where book_id =3;
delete from books_schema.favorites where book_id =3 limit 1;

insert into books_schema.favorites (user_id,book_id) values (5,2);
select * from books_schema.favorites where book_id =3;
select * from books_schema.favorites where book_id =5;



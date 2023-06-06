
drop database HomeStay;
create database HomeStay;
use HomeStay;

create table infoHomestay (
idHomestay int primary key auto_increment,
name varchar(50),
city varchar (50),
bedrooms int check (bedrooms > 0),
price int,
wcrooms int check (wcrooms > 0),
describeHomestay varchar (100)
);

insert into infoHomestay (name, city, bedrooms, price, wcrooms,describeHomestay) 
values ('home1','hanoi',1,5000000,1,'Homestay 1N1VS (1 phòng ngủ, 1 phòng vệ sinh)'),
('home2','hanoi',2,7000000,2,'Homestay 2N2VS (2 phòng ngủ, 2 phòng vệ sinh)'),
('home3','hanoi',3,9500000,2,'Homestay 3N2VS (3 phòng ngủ, 2 phòng vệ sinh)');





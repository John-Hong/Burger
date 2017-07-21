
CREATE DATABASE burgers_db;

USE burgers_db;
 

DROP TABLE IF EXISTS burgers;


CREATE TABLE burgers (

id INT  AUTO_INCREMENT NOT NULL,

burger_name varchar(50) NOT NULL,

devoured BOOL DEFAULT false,

PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name, devoured) VALUES ('Steak Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('BigMAC Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('McChicken Burger', FALSE);
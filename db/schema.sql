DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(150) NOT NULL,
  devoured BOOLEAN default false,
  date TIMESTAMP NULL,
  PRIMARY KEY(id)
);
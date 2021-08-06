DROP DATABASE IF EXISTS starsalign;

CREATE DATABASE starsalign;

USE starsalign;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(25) NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    email VARCHAR(40) NOT NULL,
    birthdate DATE NOT NULL,
    horescope VARCHAR(20) NOT NULL,
    lastlogin DATE
)

-- mysql -u root -p < server/schema.sql
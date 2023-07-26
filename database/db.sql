-- creating database
CREATE DATABASE crudnodejsmysql;

-- utilizando la base de datos

use crudnodejsmysql;

-- creating a table

CREATE TABLE customer (
    id INT (6) UNSINGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL
    phone VARCHAR(15)
);

-- TO SHOW ALL TABLES

SHOW TABLES;

-- to describe the table

describe customer;


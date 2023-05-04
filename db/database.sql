CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES (NULL, 'Joe', 1000);
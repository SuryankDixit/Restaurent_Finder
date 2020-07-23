CREATE DATABASE restro;

CREATE TABLE restaurents(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range>=1000 AND price_range<=10000)
);
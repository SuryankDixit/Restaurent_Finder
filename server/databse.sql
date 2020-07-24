CREATE DATABASE restro;

CREATE TABLE restaurents(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50),
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range>=1000 AND price_range<=10000)
);


CREATE TABLE reviews(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    restaurent_id BIGINT NOT NULL REFERENCES restaurents(id),
    name VARCHAR(50),
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating>=1 AND rating<=5)
);
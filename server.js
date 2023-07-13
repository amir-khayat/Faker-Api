const { faker } = require('@faker-js/faker');
const express = require('express');

const app = express();
const port = 8000;

// create 2 functions createUser and createCompany

const createUser = () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const createCompany = () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
    }
});

// Create an api route "/api/users/new" that returns a new user

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json({ newUser });
});

// Create an api route "/api/companies/new" that returns a new company

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json({ newCompany });
});

// Create an api route "/api/user/company" that returns both a new user and a new company

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
        user: newUser,
        company: newCompany
    };
    res.json({ responseObject });
});

// Run the server.js file using nodemon

app.listen(port, () => console.log(`Listening on port: ${port}`));





const { faker }  = require("@faker-js/faker");

module.exports = () => {
  const data = {
    users: [],
  };

  for(let i = 0; i < 2000; i++) {
    data.users.push({
      id: i,
      name: faker.name.firstName(),
      email: faker.internet.email(),
      birthdate: faker.date.past(),
      phone: faker.phone.number(),
      image: faker.image.people(),
      address: {
        country: faker.address.country(),
        state: faker.address.state(),
        street: faker.address.street(),
        number: Math.floor(Math.random() * 100),
      }
    });
  }

  return data;
}
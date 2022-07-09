module.exports = () => {
  const data = {
    users: [],
  };

  for (let i = 1; i < 10; i++) {
    data.users.push({
      id: i,
      name: 'Henrique M Kramer',
      email: 'henriquekramer@exampl.com',
      birthdate: new Date(),
      phone: '99 99999-9999',
      image: 'https://github.com/henriquekramer.png',
      address: {
        country: 'Brasil',
        state: 'Paraná',
        street: 'Rua dos Dados Falsos',
        number: Math.floor(Math.random() * 100),
      },
    });
  }

  return data;
};
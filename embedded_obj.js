//Вложенные объекты 2

const user = {
  name: 'Vasya',
  married: true,
  age: 25,
  friends: ['Kolya', 'Petya'],
  children: [
    { name: 'Mila', age: 21 },
    { name: 'Petr', age: 10 },
  ],
  company: {
    name: 'Hexlet'
  },
};


user.friends[1];
user.children[0].name;
user.company.name;
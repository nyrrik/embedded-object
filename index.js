//Вложенные объекты 1
const user = { name: 'Vasya', mirried: true, age: 25 };

user.friends = ['Kolya', 'Petya'];

user.children = [
  { name: 'Mila', age: 1 },
  { name: 'Petr', age: 10 },
];

user.company = { name: 'Hexlet' };

console.log(user);


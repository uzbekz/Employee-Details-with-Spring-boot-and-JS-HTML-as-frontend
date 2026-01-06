export let table = JSON.parse(localStorage.getItem('table')) ||
[
  {
    id : crypto.randomUUID(),
    firstName : "Kaushic",
    lastName : "Kishan",
    email : "gmkaushic@gmail.com",
    age : 22
  },
  {
    id : crypto.randomUUID(),
    firstName : "Hari",
    lastName : "Sarvajana",
    email : "SarvajanaHari@gmail.com",
    age : 21
  },
  {
    id : crypto.randomUUID(),
    firstName : "Ram",
    lastName : "Tabjulu",
    email : "ramTabjulu@gmail.com",
    age : 22
  }
];
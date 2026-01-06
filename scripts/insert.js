import {table} from '../data/table.js';

document.querySelector('.employee-form')
  .addEventListener("submit" , (event) => {
    event.preventDefault();
    table.push({
      id : crypto.randomUUID(),
      firstName : document.querySelector('.first-name').value,
      lastName : document.querySelector('.last-name').value,
      email : document.querySelector('.email').value,
      age : document.querySelector('.age').value
    })
    localStorage.setItem('table',JSON.stringify(table))
    window.location.href = 'table.html'
  })

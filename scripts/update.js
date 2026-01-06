import {table} from '../data/table.js';

//find the corresponding object
const tableId = localStorage.getItem('update')
if(!tableId){
  window.location.href = "table.html"
}

let matchingTableItem;
table.forEach((item) => {
  if(item.id === tableId){
    matchingTableItem = item;
  }
})

//populate the fields
document.querySelector('.first-name-u').value = matchingTableItem.firstName;
document.querySelector('.last-name-u').value = matchingTableItem.lastName;
document.querySelector('.email-u').value = matchingTableItem.email;
document.querySelector('.age-u').value = matchingTableItem.age;

//logic for submmition
document.querySelector('.employee-update-form')
  .addEventListener("submit" , (event) => {
    event.preventDefault()
    const index = table.findIndex(item => item.id === tableId)
    table[index] = {
      id : tableId,
      firstName : document.querySelector('.first-name-u').value,
      lastName : document.querySelector('.last-name-u').value,
      email : document.querySelector('.email-u').value,
      age : Number(document.querySelector('.age-u').value)
    }
    localStorage.setItem('table',JSON.stringify(table))
    window.location.href = "table.html"
  })


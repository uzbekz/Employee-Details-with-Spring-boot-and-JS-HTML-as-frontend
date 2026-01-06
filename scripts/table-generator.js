import {table} from '../data/table.js';

let tableHTML = '';

table.forEach((element) => {
  tableHTML += 
  `
  <tr data-unique-id="${element.id}">
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    <td>${element.age}</td>
    <td>
      <button class="delete-button">Delete</button>
      <button class="update-button" >
        <a href="update.html" style="color:white" class="update" 
        data-unique-id="${element.id}">Update</a>
      </button>
    </td>
  </tr>
  `
});

document.querySelector('.table-content').innerHTML = tableHTML;

document.querySelectorAll('.delete-button')
  .forEach((button) => {
    button.addEventListener("click" , () => {
      
      const row = button.closest('tr')
      const rowId = row.dataset.uniqueId

      table.forEach((item,index) => {
        if(item.id === rowId){
          table.splice(index,1)
        }
      })

      localStorage.setItem('table',JSON.stringify(table))
      row.remove()
    })
  })

document.querySelectorAll('.update')
  .forEach((button) => {
    button.addEventListener("click" , () => {
      const updateId = button.dataset.uniqueId
      localStorage.setItem('update',updateId)
    })
  })

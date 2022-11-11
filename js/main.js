const title = document.querySelector('#main-heading')
title.style.color = 'blue'

const listItem = document.querySelectorAll('.list-items')
for (let i = 0; i < listItem.length; i++) {
  listItem[i].style.fontSize = '5rem'
  listItem[3].innerHTML = '5rem'

}
title.innerHTML = 'Hello World'
console.log(title)

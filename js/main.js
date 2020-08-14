const clearList = document.getElementById('clearList');
const clearCompleted = document.getElementById('clearCompleted');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const totalTasks = document.querySelector("span")

//worked with Trek
function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
    count++
  }
  totalTasks.innerText = count
  console.log (count)
}

addToDoButton.addEventListener('click', function(){
    const list = document.createElement('li');
    list.classList.add('li');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = "";
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
    })
    checkCount()
})

clearList.addEventListener('click', function(){
    const list = document.createElement('li');
    toDoContainer.remove(list);
    checkCount()
})

//worked with Antony
clearCompleted.addEventListener('click', function(){
    const list = toDoContainer.getElementsByTagName('li');
    const itemsToRemove = []
    for (let item of list) {
      if(item.style.textDecoration === 'line-through' ){
        itemsToRemove.push(item)
    }
  }
  for (let i = 0; i < itemsToRemove.length; i++) {
    toDoContainer.removeChild(itemsToRemove[i])
  }
  checkCount()
})

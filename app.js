// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Please add a task!')
    }

    // create li element
    const li = document.createElement('li');
    // add item
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to the li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li)

    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete item?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks
function clearTasks(){
    // option 1 is below
    // taskList.innerHTML = '';

    // faster option
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
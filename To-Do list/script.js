const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const addBtn = document.querySelector('button')

// Add Task in list
addBtn.addEventListener('click', (e) => {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
})

// Checked and uncheck task
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // to remove task
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To Save task
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// To Show task 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();
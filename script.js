const taskInput = document.querySelector("#taskInput");

const addBtn = document.querySelector("#addBtn");

const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {

    console.log("Add button clicked!");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }   

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.append(li);

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    li.append(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        li.remove();
    })

    taskInput.value = "";

});
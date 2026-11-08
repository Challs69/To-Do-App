const taskInput = document.querySelector("#taskInput");

const addBtn = document.querySelector("#addBtn");

const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        return;
    }   

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    })


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    taskList.classList.add("show");

    li.append(deleteBtn);
    taskList.append(li);
    
    taskInput.value = "";

});

taskList.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();

        if (taskList.children.length === 0) {
            taskList.classList.remove("show");
        }

    }

   
});
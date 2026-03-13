const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const form = document.getElementById("task-form");
let tasks = [];

form.addEventListener("submit", function(event){
    event.preventDefault();
    addTask();
});

function addTask(){ 
if (inputBox.value === "") {
    alert("You must input something.");}
    else{
        let priority = document.getElementById("priority").value;
        let status = document.querySelector('input[name="status"]:checked').value;

        let task = {
            title: inputBox.value,
            priority: priority,
            status: status};
tasks.push(task);
let li = document.createElement("li");
    li.innerHTML = task.title + " (" + task.priority + ", " + task.status + ")";
    listContainer.appendChild(li);

    let span = document.createElement("span");
       span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
let index = Array.from(listContainer.children).indexOf(e.target);
if(tasks[index].status === "pending"){
            tasks[index].status = "completed";
        } else {
            tasks[index].status = "pending";
        }
    }

    if(e.target.tagName === "SPAN"){
        let li = e.target.parentElement;
        let index = Array.from(listContainer.children).indexOf(li);

        tasks.splice(index,1);
        li.remove();
    }

    saveData();

});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
 

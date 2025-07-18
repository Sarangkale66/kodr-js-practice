const taskInput=document.querySelector("#task")
const dateInput=document.querySelector("#date")
const statusInput=document.querySelector("#options")
const past=document.querySelector(".past");
const upcoming=document.querySelector(".upcoming");
const all=document.querySelector(".all");
const btn = document.querySelector(".btn");

let taskValue = "", dateValue = "", statusValue = "";
let tasks = [];

try{
  let stored = localStorage.getItem("tasks");
  tasks = stored ? JSON.parse(stored) : [] ;
}catch(err){
  console.error("Failed to parse task from localStorage", err);
  tasks=[];
}

tasks.forEach(elem => {
  taskValue = elem.task;
  dateValue = elem.date;
  statusValue = elem.status;
  let getTime = new Date(dateValue).getTime() - new Date().getTime();
  filterList(getTime);
  taskValue = dateValue = statusValue = "";
});


function CreateLiAndInsert(div){
  const li = document.createElement("li");
  li.textContent = `${taskValue} : ${dateValue} : ${statusValue}`;
  div.append(li);
}

function filterList(getTime){
  if(getTime<0){
    CreateLiAndInsert(past);
  }else{
    CreateLiAndInsert(upcoming);
  }
  CreateLiAndInsert(all);
}

btn.addEventListener("click",()=>{
  taskValue = taskInput.value;
  dateValue = dateInput.value;
  statusValue = statusInput.value;

  let getTime = new Date(dateValue).getTime() - new Date().getTime();

  filterList(getTime);

  tasks.push({ task:taskValue , date:dateValue,  status:statusValue })

  taskValue = dateValue = statusValue = "";
});

window.addEventListener("beforeunload",()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
});
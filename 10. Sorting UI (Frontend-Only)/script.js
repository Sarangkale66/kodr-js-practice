const sortFilter = document.querySelector("#sort-filter");
const studentList = document.querySelector("#student-list");

const students = [
  { name: "John", age: 20, marks: 85 },
  { name: "Jane", age: 22, marks: 90 },
  { name: "Jim", age: 21, marks: 78 },
  { name: "Jill", age: 23, marks: 88 },
  { name: "angel", age: 23, marks: 80 },
  { name: "sank", age: 25, marks: 80 },
];

function createTd(content){
  const td=document.createElement("td");
  td.classList.add("border","border-gray-300","p-2");
  td.textContent=content;
  return td;
}

function renderTable(){
  studentList.innerHTML="";
  students.forEach((value,index)=>{
    const expenseItem=document.createElement("tr");
    [createTd(value.name),createTd(value.age),createTd(value.marks)].forEach(td => { expenseItem.appendChild(td) });
    studentList.appendChild(expenseItem);
  })
}

const sortBy = (key) => {
  if (key === "name") {
    students.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }else{
    students.sort((a, b) => a[key] - b[key]);
  }
  renderTable();
};

sortFilter.addEventListener("change",(evts)=>{
  console.log(evts.target.value);
  sortBy(evts.target.value)
});

sortBy("name"); // Initial sort by name
sortFilter.value = "name"; // Set initial value of the select dropdown
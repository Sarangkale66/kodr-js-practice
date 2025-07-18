const form=document.querySelector("form");
const filteredExpenses=document.querySelector(".filtered-expensed");
const monthFilter=document.querySelector("#month-filter");

let arr=null;

try{
  let stored = localStorage.getItem("expenses");
  arr = stored ? JSON.parse(stored) : [[],[],[],[],[],[],[],[],[],[],[],[]] ;
}catch(e){
 console.error("cannot able to fetch data from local storage");
 arr=[[],[],[],[],[],[],[],[],[],[],[],[]];
}

for(let i=0;i<arr.length;i++){
  if(arr[i])
    arr[i].forEach((expense)=>{
      const expenseItem=document.createElement("tr");
      [createTd(expense.ExpenseName), createTd(`₹${expense.Amount}`), createTd(expense.Date)].forEach(td => { expenseItem.appendChild(td) });
      expenseItem.classList.add("expense-item");
      document.querySelector("#expense-list").appendChild(expenseItem);
    });
}

function createTd(content){
  const td=document.createElement("td");
  td.classList.add("border","border-gray-300","p-2");
  td.textContent=content;
  return td;
}

form.addEventListener("submit",(evts)=>{
  evts.preventDefault();
  const name=evts.target.name.value;
  const amount=evts.target.amount.value;
  const date=evts.target.date.value;

  if(!name || !amount || !date){
    alert("Please fill all the fields");
    return;
  }  

  if(isNaN(amount)){
    alert("Please enter a valid amount"); 
    return;
  }

  if(new Date(date) > new Date()){
    alert("Please enter a valid date");
    return;
  }

  const expenseItem=document.createElement("tr");
  [createTd(name),createTd(`₹${amount}`),createTd(date)].forEach(td => { expenseItem.appendChild(td) });
  expenseItem.classList.add("expense-item");
  document.querySelector("#expense-list").appendChild(expenseItem);
  events.target.reset();

  const monthIndex=new Date(date).getMonth();
  if(!arr[monthIndex]) arr[monthIndex]=[];
  arr[monthIndex].push({ExpenseName:name, Amount:parseFloat(amount), Date:date}); 
});

monthFilter.addEventListener("change",(evt)=>{
  const selectedMonth=evt.target.value;
  const filteredExpenses=arr.filter(expense=>{
    const date=new Date(expense[0].Date);
    return selectedMonth==="all" || date.toLocaleString("default",{month:"long"})===selectedMonth;
  });
  console.log(filteredExpenses);
})

window.addEventListener("beforeunload",()=>{
  localStorage.setItem("expenses",JSON.stringify(arr||[[],[],[],[],[],[],[],[],[],[],[],[]]));
});
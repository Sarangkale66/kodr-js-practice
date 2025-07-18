const form = document.querySelector("form");

let obj={};

try{
  const stored = localStorage.getItem("formData");
  obj = stored ? JSON.parse(stored) : {};
}catch(e){
  console.error("⚠️ localStorage not working");
  obj = {};
}

if(obj.name) form.name.value = obj.name;
if(obj.email) form.email.value = obj.email;

form.addEventListener("change",(evts)=>{
  evts.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  obj={ name, email };
})

window.addEventListener("beforeunload",()=>{
  localStorage.setItem("formData",JSON.stringify(obj));
});
const productDiv = document.querySelector(".products");
const searchInput = document.querySelector("#search");
let prev=null;
const products = [
  { url:"https://cdn.thewirecutter.com/wp-content/media/2024/12/BVEST-32-INCH-TVS-2048px-2870-3x2-1.jpg",name:"Samsung T.V",category:"Electronics" },
  { url:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"iPhone", category:"Handset" },
  { url:"https://images.unsplash.com/photo-1703065477962-80bb1b614fd7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Samsung Galaxy",category:"tablet"},
  { url:"https://www.patanjaliayurved.net/assets/product_images/400x500/1739858231DantKantiNatural100g-1.webp",name:"Danta Kanti",category:"tooth paste"},
  { url:"https://www.jiomart.com/images/product/original/590011678/onion-1-kg-pack-product-images-o590011678-p611163418-1-202503161707.jpg?im=Resize=(420,420)",name:"onion",category:"vegetable" }
];

function render(arr){
  arr.forEach(value=>{
    const div= document.createElement("div");
    div.className="card";
    div.innerHTML = `     
        <img src="${value.url}" >
        <p style="font-size: 1em;">${value.category}</p>
        <p style="padding-bottom: 0px;">${value.name}</p>`;
    productDiv.appendChild(div);
  })
}

searchInput.addEventListener("input",(e)=>{
  e.preventDefault();
  if(prev) clearInterval(prev);

  prev = setTimeout(()=>{
    let txt = e.target.value;
    let newArr = products.filter((value)=>value.category.toLowerCase().includes(txt) || value.name.toLowerCase().includes(txt));
    productDiv.innerHTML=null;
    render(newArr);
  },300);

})

render(products);
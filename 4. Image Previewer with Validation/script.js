const imgInput = document.querySelector("#img");
const image = document.querySelector(".image");


imgInput.addEventListener("change",(e)=>{
  // image/jpeg image/png
  let fileType = e.target.files[0].type;
  let fileSize = e.target.files[0].size;
  let precision = Math.round(fileSize/1024000);
  
  if(precision > 2) {
    alert("image must be less than 2mb")
    imgInput.value=null;
    return;
  }
  if(fileType !=="image/jpeg" && fileType !=="image/jpg" && fileType !=="image/png"){
    alert("image must be of type jpeg or png")
    imgInput.value=null;
    return;
  }
  
  let url = URL.createObjectURL(e.target.files[0]);
  image.src=url;

});
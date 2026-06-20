const imageInput =
document.getElementById("imageInput");

const preview =
document.getElementById("preview");

const status =
document.getElementById("status");

imageInput.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file)return;

preview.src=
URL.createObjectURL(file);

});

document
.getElementById("saveBtn")
.addEventListener("click",()=>{

status.innerText=
"Stiker disimpan.";

});

document
.getElementById("waBtn")
.addEventListener("click",()=>{

alert(
"Integrasi WhatsApp API belum dipasang."
);

});
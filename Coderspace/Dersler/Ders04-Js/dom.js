let value;

value=document;
value=document.URL;
value=document.title;
value=document.location;
value=document.location.hostname;
value=document.scripts[0];
value=document.links;
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].classList;

// ID İLE ÇEKME

value=document.getElementById("title");
value=document.getElementById("title").textContent;
value=document.getElementById("title").innerHTML;

// CLASS İLE ÇEKME
value=document.getElementsByClassName("text");
value=document.getElementsByClassName("text")[0];

// TAG İLE ÇEKME
value=document.getElementsByTagName("p");

// QUERY İLE ÇEKME
value=document.querySelector("#title");
value=document.querySelector(".text");
value=document.querySelector("span");

// Eleman oluşturma

const button=document.createElement("a");
button.id="denemeButon";
button.className="btn btn-danger";
button.href="https://www.google.com";
button.target="_blank";
button.textContent="Googlea git"
const divSec=document.querySelector("#denemeDiv");
divSec.appendChild(button);

value=document.getElementById("denemeButon");

value.addEventListener("click",function(){
console.log("Tıklama işlemi gerçekleşti")
})

const textInput=document.querySelector("#text-input");
textInput.addEventListener("keyup",()=> console.log(textInput.value)); //tuştan elini çektiğinde
textInput.addEventListener("focus",()=> (textInput.value=""));
textInput.addEventListener("blur",()=> console.log("Çıkış yapıldı"));


console.log(value);
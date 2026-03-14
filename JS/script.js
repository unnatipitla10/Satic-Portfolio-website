/*  Hamburger Menu*/
function toggleMenu(){
  
  let menu = document.getElementById("mobileMenu");
  
  if(menu.style.display === "flex"){
  menu.style.display="none";
  }else{
  menu.style.display="flex";
  }
}

/* Contact Section */
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e){

e.preventDefault();

popup.style.display = "block";

setTimeout(() => {
popup.style.display = "none";
},5000);

form.reset();

});

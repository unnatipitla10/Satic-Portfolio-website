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

// Go-to-top button 
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {

if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}

};

function topFunction() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}

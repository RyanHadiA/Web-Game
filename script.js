/*menu samping*/
{const toggleSidebar = document.querySelector("#toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

document.querySelector("#toggle-sidebar").onclick =()=>{
    sidebar.classList.toggle("sidebar-open");
};

toggleSidebar.addEventListener("click", function(e) {
  if(!toggleSidebar.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove("sidebar-open");
  }
});
}
/*efek ketik**/
const txt =['WELCOME TO MY WEBSITE', 'THANKS YOU FOR VIEWING :) '];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

function efekNgetik(){
    console.log(txt[1])/*untuk mengecek coding diconsole*/
    if(count == txt.length){
        count = 0;
    }
    currentTxt = txt[count]

    words = currentTxt.slice(0, ++txtIndex);

    document.querySelector("#ketik").textContent = words;
    if(words.length == currentTxt.length){
        count++ ;
        txtIndex = 0;
    }
    setTimeout(efekNgetik, 200)
};

window.onload = showSlides;

let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("slides-fade");
let dots = document.getElementsByClassName("titik");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    

slides[slideIndex-1].style.display = "block";  
setTimeout(showSlides, 3000); // Change image every 2 seconds
}


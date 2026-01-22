alert("JavaScript is working!");


document.getElementById("about-btn").onclick = function(){
    document.getElementById("about-text").innerText="I am building my career step by step as a Full Stack Web Developer.";

}

let name = "Haritha Yaramala";
let role = "Full Stack Web Developer";

console.log(name);
console.log(role);
console.log("Html CSS JavaScript");

let isOpen = true;
if(isOpen){
    console.log("Menu is open");
}else{
    console.log("Menu is closed");
}

let menuIcon = document.getElementById("menuIcon");
let navMenu = document.getElementById("navMenu");
menuIcon.onclick = function(){
    navMenu.classList.toggle("show");
    if(navMenu.classList.contains("show")){
        console.log("Menu is opend");
    }else{
        console.log("Menu is closed");
    }
};
let btn = document.getElementById("contactBtn");
let info = document.getElementById("contsctinfo");
btn.onclick=function(){
    if(info.style.display === "none"){
        this.onfocus.style.display="block";
        btn.innerText="Hide Contact";
    }else{
        info.style.display = "none";
        btn.innerText = "Show Contact";
    }
};

function showAlert(){
    alert("Thank you for visiting my resume!");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
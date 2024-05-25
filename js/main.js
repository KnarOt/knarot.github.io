"use strict";
  
document.body.onload=function(){
  setTimeout(function(){
  let preloader=document.querySelector('.preloader');
  preloader.classList.add("hidden")
},1000)

}
//
let i=0;
let progress = document.querySelector(".progressE");
setInterval(function () {
  if (i < 85) {
    progress.style.width = i + '%';
    i++;
  }

}, 100)
let progressRu = document.querySelector(".progressR");

let changeProgressR = (progressR) => {
  progressRu.style.width = `${progressR}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgressR(22), 500);
setTimeout(() => changeProgressR(45), 1000);
setTimeout(() => changeProgressR(85), 4600);
setTimeout(() => changeProgressR(98), 5266);
let progressbar = document.querySelector(".progressP");
let changeProgress = (progressP) => {
  progressbar.style.width = `${progressP}%`;
};

setTimeout(() => changeProgress(22), 500);
setTimeout(() => changeProgress(45), 1000);
let progressP = document.querySelector(".progress");

let changeProgressp = (progress) => {
  progressP.style.width = `${progress}%`;
};
setTimeout(() => changeProgressp(22), 1500);
setTimeout(() => changeProgressp(45), 1000);
setTimeout(() => changeProgressp(85), 4600);

//   // lang
let hamburger = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")
let menuLi = menu.querySelectorAll(".nav-item");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show");
})

menuLi.forEach(n => n.addEventListener("click", () => {

  menu.classList.remove("show");
}))







  
  

  
  
  
  
  

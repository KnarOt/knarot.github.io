"use strict";
document.getElementById('design').onmouseover = function() {
  this.style.color = '#' + Math.floor(Math.random() * 167715).toString(16);
};

var i=0;
let progress=document.querySelector(".progress");
window.addEventListener("scroll",function(){
  let allHeight=document.body.scrollHeight-document.documentElement.clientHeight;

  console.log(allHeight);
let winscroll=window.pageYOffset;
progress.style.width=winscroll*100/allHeight+"%";
// progress.style.width=i+"%";
})

let btn=document.querySelector(".btn");
if(!localStorage.theme)
{
localStorage.setItem("theme","light");
}
document.body.className=localStorage.theme;
if(localStorage.theme=="dark"){
   
    btn.innerHTML='<i class="fa-solid fa-sun"></i>';
}else{
    btn.innerHTML='<i class="fa-solid fa-moon"></i>';
}
btn.addEventListener("click",function(){
    if(localStorage.theme=="light"){
        document.body.className="dark";
        btn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }else{
        document.body.className="light";
        btn.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
localStorage.theme=document.body.className;
})


const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();


//about
// var i=0;
// let mb0=document.querySelector("#mb0");
// const d=new Date();
// let hours=d.getHours();
// // mb0.innerHTML=hours;
// let timerId= setInterval(function(){
//   mb0.innerHTML=i
//     i++; 
//     if( i>1234){
//       clearInterval(timerId)
//     }
//   },100);

//   var j=0;
//   let mb00=document.querySelector("#mb00");
//   const dd=new Date();
//   let hourss=dd.getHours();
//   mb00.innerHTML=hourss;
//   let timerIdd= setInterval(function(){
//     mb00.innerHTML=j
//       j++; 
//       if( j>1234){
//         clearInterval(timerIdd)
//       }
//     },100);


// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".menu");
//     const navLinks = nav.querySelectorAll("a");
  
//     burger.addEventListener("click", () => {
//       nav.classList.toggle("nav-active");
  
//       navLinks.forEach((link, index) => {
//         if (link.style.animation) {
//           link.style.animation = "";
//         } else {
//           link.style.animation = `navLinkFade 0.5s ease forwards ${
//             index / 7 + 0.5
//           }s `;
//         }
//       });
//       burger.classList.toggle("toggle");
//     });
    //
 // };
  
  //navSlide();
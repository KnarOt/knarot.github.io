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

document.body.onload=function(){
  setTimeout(function(){
  let preloader=document.querySelector('.preloader');
  preloader.classList.add("hidden")
},1000)

}






// lang

let langArr={
  "homeLi":{
      "hy":"Գլխավոր", 
      "ru":"дом",
     "en" :"HOME",
  },
  "aboutLi":{
      "hy":"մեր մասին", 
      "ru":"о нас",
     "en" :"ABOUT", 
  },
  "featureLi":{
      "hy":"ԱՌԱՆՁՆԱՀԱՏԿՈՒԹՅՈՒՆ", 
      "ru":"ОСОБЕННОСТЬ",
     "en" :"FEATURE", 
  },
  "pricingLi":{
    "hy":"գնագոյացում", 
    "ru":"ценообразование",
   "en" :"PRICING", 
},
  "reviewLi":{
      "hy":"ՎԵՐԱՆԱՅՈՒՄ", 
      "ru":"ОБЗОР",
     "en" :"REVIEW", 
  },
  "contactLi":{
      "hy":"Բարի գալուստ", 
      "ru":"о наc",
     "en" :"Contact", 
  },
  "designh1":{
   "hy":"Հեղափոխական հավելված, որն օգնում է վերահսկել ձեր սեփական մարզավիճակը", 
  "ru":"Революционное приложение, которое помогает контролировать собственную физическую форму",
  "en" :"The Revolutionary App That Helps To Control Your Own Fitness",
  },
  "tel":{
     "hy":"սկսել անվճար",
    "ru":"начать бесплатнo",
    "en":"start free"
  },
  "text-white":{
      "hy":"Սա իմ առաջին ծրագիրն է", 
      "ru":" это моя первая программа",
      "en" :"This is my first paragrapm",
  },
  "redmore":{
    "hy":"ավելի կարմիր",
    "ru":"красный больше",
    "en":"Red more",
  },
"  contactt":{
    "hy":" կապվեք մեզ հետ",
    "ru":"связаться с нами",
    "en":"contact us",
  },
"aboutapp":{
  "hy":"Հավելվածի մասին",
  "ru":"О приложении",
  "en":"About App",
},
"aboutapp1":{
  "hy":"#1 հավելված ձեր ֆիթնեսի համար",
  "ru":"№1 Приложение  для вашего фитнеса",
  "en":"#1 App For Your Fitness",
 },


// Լիովին արձագանքող
  }
  let allLang=["hy","ru","en"] 
  let select=document.querySelector(".lang-site");
  select.addEventListener("change",function(){
      let lang=select.value;
      console.log(lang)
  location.href=window.location.pathname+"#"+lang
    })
  function changeLang(){
      let  hash=window.location.hash;
      console.log(hash)
      hash=hash.slice(1);
      console.log(hash);
      if(!allLang.includes(hash)){
          location.href=window.location.pathname+"#en"   
      } 
    window.onhashchange=function(){
      location.reload();
    }
      select.value=hash;
     for (const key in langArr) {
      let elem=document.querySelector(`[data-lang=${key}]`);
      console.log(elem)
      if(elem){
      elem.innerHTML=langArr[key][hash];
     }
  
  }}
  changeLang();





//about
let boxes=document.querySelectorAll(".box");
window.addEventListener("scroll",function(){
let screenHeight=window.innerHeight;

console.log(screenHeight);

boxes.forEach(function(box){
let boxTop=box.getBoundingClientRect();
console.log(boxTop.top);
if(boxTop.top<screenHeight/2 )
{ //screenHeight -100){
box.classList.add("rotatebox");
}
else{
    // box.classList.remove("show")
    box.classList.remove("rotatebox")
}
})
})





var i=0;
let mb0=document.querySelector("#mb0");
const d=new Date();
let hours=d.getHours();
// mb0.innerHTML=hours;
let timerId= setInterval(function(){
  mb0.innerHTML=i
    i++; 
    if( i>1234){
      clearInterval(timerId)
    }
  },100);

  var j=0;
  let mb00=document.querySelector("#mb00");
  const dd=new Date();
  let hourss=dd.getHours();
  mb00.innerHTML=hourss;
  let timerIdd= setInterval(function(){
    mb00.innerHTML=j
      j++; 
      if( j>1234){
        clearInterval(timerIdd)
      }
    },100);




    let priceing=[
  {
      id:"t1",
      month:"$14.99/month",
      yeare:"$114.99/ Yearly",
   
  },
  {
      id:"t2",
      month:"$24.99/month",
      yeare:"$124.99/ Yearly",
  },
  {
      id:"t3",
      month:"$34.99/month",
      yeare:"$134.99/ Yearly",
  }
]




    // let active = false;

      let mons= document.querySelectorAll(".month")
      let yearly= document.querySelectorAll(".yearly")
      let btn2 = document.querySelector("#btn2")
      let btn1 = document.querySelector("#btn1")
  let tab2Y = document.querySelector("#tab2Y")
  let tab3Y = document.querySelector("tab3Y")
  let  tab2M= document.querySelector(".tab2M")
  let  tab3M= document.querySelector(".tab3M")
  let tab=document.querySelectorAll("#tab")
  // y.style.display === "none"
  console.log(mons);
  console.log(yearly);
  // priceing.forEach(tab);
  btn1.addEventListener("click",function(){
  console.log("ok")
  for (let i=0;i<yearly.length;i++){
    mons[i].classList.remove("hidden");
    yearly[i].classList.add("hidden");
  }
  })
  btn2.addEventListener("click",function(){
    console.log("ok")
    for (let i=0;i<yearly.length;i++){
      yearly[i].classList.remove("hidden");
      mons[i].classList.add("hidden");
    }
    })
  function clearContainer(){
    tab3Y.innerHTML=" ";
}






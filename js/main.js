"use strict";
  
document.body.onload=function(){
  setTimeout(function(){
  let preloader=document.querySelector('.preloader');
  preloader.classList.add("hidden")
},1000)

}
//
let i=0;
let progress=document.querySelector(".progressE");
setInterval(function(){
if(i<85){
  progress.style.width=i+'%';
  i++;
}

},100)
let  progressRu = document.querySelector(".progressR");

let changeProgressR = (progressR) => {
  progressRu.style.width = `${progressR}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgressR(22), 500);
setTimeout(() => changeProgressR(45), 1000);
setTimeout(() =>changeProgressR(85), 4600);
setTimeout(() => changeProgressR(98), 5266);
let  progressbar = document.querySelector(".progressP");
let changeProgress = (progressP) => {
  progressbar.style.width = `${progressP}%`;
};

setTimeout(() => changeProgress(22), 500);
setTimeout(() => changeProgress(45), 1000);
// setTimeout(() => changeProgress(85), 4600);
// setTimeout(() => changeProgress(98), 5266);
// setTimeout(() => changeProgress(100), 8000);
let  progressP = document.querySelector(".progress");

let changeProgressp = (progress) => {
  progressP.style.width = `${progress}%`;
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgressp(22), 1500);
setTimeout(() => changeProgressp(45), 1000);
setTimeout(() => changeProgressp(85), 4600);
// setTimeout(() => changeProgress(98), 5266);
// setTimeout(() => changeProgress(100), 8000);







  
  
//   // lang
  


//   let langArr={
//     "homeLi":{
//         "hy":"Գլխավոր", 
//         "ru":"дом",
//        "en" :"HOME",
//     },
//     "aboutLi":{
//         "hy":"մեր մասին", 
//         "ru":"о нас",
//        "en" :"About", 
//     },
//     "featureLi":{
//         "hy":"ԱՌԱՆՁՆԱՀԱՏԿՈՒԹՅՈՒՆ", 
//         "ru":"ОСОБЕННОСТЬ",
//        "en" :"Feature", 
//     },
//        "contactLi":{
//         "hy":"Բարի գալուստ", 
//         "ru":"о наc",
//        "en" :"Contact", 
//     },
//   }
//   // Լիովին արձագանքող
    
//     let alLang=["hy","ru","en"] 
//     let select=document.querySelector(".lang-site");
//     select.addEventListener("change",function(){
//         let lang=select.value;
//         console.log(lang)
//     location.href=window.location.pathname+"#"+lang
//       })
//     function changeLang(){
//         let  hash=window.location.hash;
//         console.log(hash)
//         hash=hash.slice(1);
//         console.log(hash);
//         if(!allLang.includes(hash)){
//             location.href=window.location.pathname+"#en"   
//         } 
//       window.onhashchange=function(){
//         location.reload();
//       }
//         select.value=hash;
//        for (const key in langArr) {
//         let elem=document.querySelector(`[data-lang=${key}]`);
//         console.log(elem)
//         if(elem){
//         elem.innerHTML=langArr[key][hash];
//        }
    
//     }}
//     changeLang();
  
// //   
  
  
  
  
  
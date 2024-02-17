"use strict";
// var i=0;
// let progress=document.querySelector(".progress");
// window.addEventListener("scroll",function(){
//   let allHeight=document.body.scrollHeight-document.documentElement.clientHeight;

//   console.log(allHeight);
// let winscroll=window.pageYOffset;
// progress.style.width=winscroll*100/allHeight+"%";

// })

const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))




// accordion
let acc = document.querySelectorAll(".accordion");
var  i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/*teamW0rk*******************/
let names=[
  {
    name:"Project Name",
    prof:"GOES HERE 1",
    img:"url(img/portfolio-1.jpg)",
   
  },
  {
      name:"Project Name",
      prof:"GOES HERE 2",
      img:"url(img/portfolio-2.jpg)",
     
  },
  {
    name:"Project Name",
    prof:"GOES HERE 3",
      img:"url(img/portfolio-3.jpg)",
      
  }, 
  {
    name:"Project Name",
    prof:"GOES HERE 4",
      img:"url(img/portfolio-4.jpg)",
    
  },


  {
    name:"Project Name",
    prof:"GOES HERE 5",
    img:"url(img/portfolio-5.jpg)",
   
  },
  {
      name:"Project Name",
      prof:"GOES HERE 6",
      img:"url(img/portfolio-6.jpg)",
     
  },
  {
    name:"Project Name",
    prof:"GOES HERE 7",
      img:"url(img/portfolio-7.jpg)",
      
  }, 
  {
    name:"Project Name",
    prof:"GOES HERE 8",
      img:"url(img/portfolio-8.jpg)",
    
  },
  {
    name:"Project Name",
    prof:"GOES HERE 9",
      img:"url(img/portfolio-9.jpg)",
    
  },
]
let container=document.querySelector(".containerLatestWork");
names.forEach(function(item,index,array){
  let names=document.createElement("div");
 names.className="names";
  // product.innerHTML=item.name;
 names.style.backgroundImage=item.img;
container.append(names);
// product.addEventListener("mouseover",function(){
//     product.style.backgroundImage=item.secondImg;
// })

// product.addEventListener("mouseout",function(){
//     product.style.backgroundImage=item.img;

// })
names.addEventListener("mouseover",showInfo)
function showInfo(){
  let productInfo=document.createElement("div");
  productInfo.className="product-info";
  productInfo.innerHTML=`<h1>${item.name}</h1>
  <p>${item.prof}</p> 
   ___________________
 
   <i class="fa-brands fa-twitter">    
   <i class="fa-brands fa-instagram">   
  <i class="fa-brands fa-facebook"></i>   `;
names.append(productInfo);
names.removeEventListener("mouseover",showInfo);
}

names.addEventListener("mouseout",clearInfo)
function clearInfo(){
 let productInfo=names.querySelector(".product-info");
 productInfo.classList.add("show")
names.removeEventListener("mouseout",clearInfo)
}
})


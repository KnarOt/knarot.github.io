"use strict";
document.getElementById('design').onmouseover = function() {
  this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
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



let boxes=document.querySelectorAll(".boxesc");
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






let boxMarceting=document.querySelectorAll(".boxMarceting")


window.addEventListener("scroll",function(){
    let screenHeightm=window.innerHeight;
    
    console.log(screenHeightm);
    
    boxMarceting.forEach(function(boxMarceting){
    let boxTop=boxMarceting.getBoundingClientRect();
    console.log(boxTop.top);
    if(boxTop.top<screenHeightm/3 )
    {   boxMarceting.classList.add("rotatebox");
    }
    else{
        boxMarceting.classList.remove("rotatebox")
    }
    })
    })

    /*********team********************/
    let names=[
      {
          name:"Cindy",
          prof:"Senior Designer",
          img:"url(IMG/team1.jpg)",
       
      },
      {
          name:"Sandar",
          prof:"Manager",
          img:"url(IMG/team2.jpg)",
         
      },
      {
          name:"Linda",
          prof:"Accautant",
          img:"url(IMG/team3.jpg)",
          secondImg:"url(IMG/portfolio-img2.jpg)"
      }, 
      {
          name:"Mary",
          prof:"Core Developer",
          img:"url(IMG/team4.jpg)",
          secondImg:"url(IMG/portfolio-img3.jpg)"
      },
  ]
  let container=document.querySelector(".container");
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

/************Filter******* */
  let language=[{
      id:"J1",
      name:"front-end",
      monse:"monse-3",
      price:10000,
      img:"url(img/front-end.png)",
   
  },
  {
      id:"J2",
      name:"react",
      monse:"monse-7",
      price:40000,
      img:"url(img/react.png)"
  },
  {
      id:"J3",
      name:"javaScript",
      monse:"monse-4",
      price:10000,
      img:"url(img/javaScript.png)"
  },
  {
      id:"J4",
      name:"python-django",
      monse:" monse-3",
      price:20000,
      img:"url(img/python-django.png)"
  },
  {
      id:"J5",
      name:"java",
      monse:"monse-4",
      price:20000,
      img:"url(img/java.png)"
      
  },
  {
      id:"J6",
      name:"front-end",
      monse:" monse-7",
      price:80000,
      img:"url(img/front-end.png)"
  },
  {
      id:"J7",
      name:"react",
      monse:"monse -4",
      price:30000,
      img:"url(img/react.png)"
  },
  {
      id:"J8",
      name:"javaScript",
      monse:" monse-7",
      price:40000,
      img:"url(img/javaScript.png)"
  },
  ]
  let productContainer=document.querySelector("#product-container");
  let inputText=document.querySelector("#input-text");
  let searchButton=document.querySelector("#search_button");
  let filterBTN=document.querySelector(".filterBTN")
  
  let Jname=document.querySelector("#Jname");
  let priceStart=document.querySelector("#priceStart")
  let Jmonse=document.querySelector("#Jmonse");
  let priceEnd=document.querySelector("#priceEnd") 
 language.forEach(showProduct);
  
  searchButton.addEventListener("click",function() {
      console.log(inputText.value) ; 
      
      let filterLanguage=language.filter(function(item){
          return item.name.toLowerCase().includes(inputText.value.toLowerCase());      
      })
      console.log(filterLanguage)
      clearContainer();
      filterLanguage.forEach(showProduct) ;
  
  
  
      
  
      let filterOfPrice=language.filter(function(item)
      { 
      return item.price>=inputText.value;  
      })
      filterOfPrice.forEach(showProduct);
  
    let filterOfmonse=language.filter(function(item)
  { 
  return item.monse.toLowerCase()==inputText.value.toLowerCase();
  
  
  })
  console.log(filterOfmonse);
  filterOfmonse.forEach(showProduct);
  })
  
  //**
  filterBTN.addEventListener("click",function(){
   console.log("ok");
  })
  
  filterBTN.addEventListener("click",function()
    {
  console.log(Jname.value)
  let filterAll=language.filter(function(item){
   return  item.name.toLowerCase().includes(Jname.value.toLowerCase()) 
   item.price>=priceStart.value && item.price<=item.value;
  })
  clearContainer();
  filterAll.forEach( showProduct)
    } )
  
     function showProduct(item){
     let languageElement=document.createElement("div") ;
     languageElement.className="product";
     productContainer.append(languageElement);
     let productImg=document.createElement('div')
     productImg.className="productImg";
     languageElement.append(productImg);
  
  productImg.style.backgroundImage=item.img
  
  languageElement.innerHTML+=`<p>${item.name}-${item.monse}
  <p>price՝${item.price}$</p>`
  }
  
  
  
  function clearContainer(){
      productContainer.innerHTML="";
  }

function clearContainer(){
    productContainer.innerHTML=" ";
}





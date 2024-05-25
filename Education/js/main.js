"use strict";
/*dark*/

let DarkLite = document.querySelector(".DarkLite");
if (!localStorage.theme) {
    localStorage.setItem("theme", "light");
}
document.body.className = localStorage.theme;
if (localStorage.theme == "dark") {

    DarkLite.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    DarkLite.innerHTML = '<i class="fa-solid fa-moon"></i>';
}
DarkLite.addEventListener("click", function () {
    if (localStorage.theme == "light") {
        document.body.className = "dark";
        DarkLite.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.className = "light";
        DarkLite.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.theme = document.body.className;
})

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



AOS.init(
    {
        duration: 650,

    });
/************Filter******* */

let language = [
    {
        name: "FrontEnd",
        monthe: 3,
        price: 20000,
        img: "url(img/front-end.png)",
    },
    {
        name: "React",
        monthe: 7,
        price: 25000,
        img: "url(img/react.png)"
    },
    {
        name: "javaScript",
        monthe: 4,
        price: 30000,
        img: "url(img/javaScript.png)"
    },
    {
        name: "Java",
        monthe: 3,
        price: 35000,
        img: "url(img/java.png)",
    },
    {
        name: "Python-Django",
        monthe: 7,
        price: 40000,
        img: "url(img/python-django.png)",
    },
    {
        name: "SQL",
        monthe: 4,
        price: 45000,
        img: "url(img/sql3d.jfif)",
    },]
let OnLine = document.querySelector("#OnLine");
let OffLine = document.querySelector("#OffLine");
let ageNumber = document.querySelector("#ageNumber");
let ageRange = document.querySelector("#ageRange");
let btnCalc = document.querySelector("#btnCalc");
let result = document.querySelector("#result");
let quizLanguages = document.querySelector(".quizLanguages");
quizLanguages.outerHTML
// /*Calculator*/
ageNumber.oninput = function () {
    ageRange.value = ageNumber.value;
}
ageRange.oninput = function () {
    ageNumber.value = ageRange.value;
}
console.log(OnLine.value)
let languages = document.querySelectorAll("[name='Language']");
console.log(languages)

//my code

let calc = document.querySelector(".calc");
let priceCalc;
calc.addEventListener("click", function () {
    let langChecked = document.querySelector("[name='Language']:checked");
    let formatChecked = document.querySelector("[name='courses']:checked");
    console.log(langChecked.value)
    let courselanguages = language.find(function (item2) {
        return item2.name == langChecked.value
    })
    console.log(courselanguages)
    console.log(language)
    if (ageNumber.value < 15 || ageNumber.value > 60) {
        if (formatChecked.value == "OnLine") {
            priceCalc = +courselanguages.price - courselanguages.price * 20 / 100
        } else {
            priceCalc = +courselanguages.price - courselanguages.price * 10 / 100
        }
    } else {
        if (formatChecked.value == "OnLine") {
            priceCalc = courselanguages.price - 10000
        } else {
            priceCalc = courselanguages.price
        }
    }
    result.innerHTML = `${langChecked.id} ${formatChecked.id} դասընթացի արժեքը ${ageNumber.value}
    <br> տարեկան մասնակցի համար կլինի ամսական ${priceCalc} դրամ:<br>
     կուրսի տևողությունը ${courselanguages.monthe} ամիս,<br>
     Ընդհանուր կուրսի արժեքը կլինի ${courselanguages.monthe * priceCalc} դրամ `
    clearContainer(courseImg)
    showProduct(courselanguages, courseImg)
})

// /*searchPRODUCT*/
let productContainer = document.querySelector("#product-container");
let inputText = document.querySelector("#input-text");
let filterBTN = document.querySelector("#filterBTN")
let Jname = document.querySelector("#Jname");
let courseImg = document.querySelector(".coursesimg")
language.forEach(function (courseitem) {
    showProduct(courseitem, productContainer)
});

// /*FILTER BLOCK*/

filterBTN.addEventListener("click", function () {
    let findCourse = language.find(function (item) {
        return item.name.toLowerCase() == Jname.value.toLowerCase()
    })
    clearContainer(productContainer);
    showProduct(findCourse, productContainer)
})
//**
function showProduct(item, container) {
    let languageElement = document.createElement("div");
    languageElement.className = "product";
    container.append(languageElement);
    let productImg = document.createElement('div')
    productImg.className = "productImg";
    languageElement.append(productImg);
    productImg.style.backgroundImage = item.img
    languageElement.innerHTML += `<p>${item.name}-Monthe ${item.monthe} <p>price-${item.price}$</p>`
}
function clearContainer(container) {
    container.innerHTML = " ";
}




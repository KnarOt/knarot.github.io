"use strict";
let quizes=[

{   quetionText:"Ո՞րն է Python ֆայլերի ճիշտ ընդլայնումը:",
    answersList:[".py",".pyth" ,".pt",".pyt"],
    correct:1,
},
{   quetionText:"Ո՞րն է ՈՉ իրավական փոփոխականի անունը:",
        answersList:["my-var","_myvar","my-var","Myvar"],
        correct:3,
},
{   quetionText:"Ինչպե՞ս գրել «Բարև աշխարհ» ",
    answersList:["echo(«Բարև աշխարհ»)","print(«Բարև աշխարհ»)","echo«Բարև աշխարհ»","msg(«Բարև աշխարհ»)"],
    correct:2,
},
{   quetionText:"Ինչպե՞ս ստեղծել function python-ում:",
        answersList:["def myFunction():","function=myFunction()","def:myFunction()"],
        correct:1,
},
{   quetionText:"Ո՞րն է ճիշտ շարահյուսությունը Python-ում փոփոխականի կամ օբյեկտի տեսակը դուրս բերելու համար:",
        answersList:["print(type(x))","print(typeof x)","print(typeOf(x))","print(typeof(x))"],
        correct:1,
},
{   quetionText:"Ո՞րն է ճիշտ շարահյուսությունը տողի առաջին նիշը վերադարձնելու համար:",
        answersList:["x = Hello[0];","x = Hello.sub(0, 1)","x = Hello".sub(0, 1)],
        correct:1,
},
{   quetionText:"Ո՞ր մեթոդը կարող է օգտագործվել տողի մասերը փոխարինելու համար:",
        answersList:["rep() ","replaceString() ","switch() ","replace()  "],
        correct:4,
},
{   quetionText:"Ո՞ր օպերատորն է օգտագործվում թվերը բազմապատկելու համար:",
        answersList:["%","+","*","/"],
        correct:3,
},
{   quetionText:"Ինչպե՞ս գրել IF հրամանը որոշ կոդի կատարման համար,<br> եթե «i»-ն հավասար չէ 8-ի:",
        answersList:["If(i!=8)","if i!=8:","if i<(i<>8)","if inot eq 8"],
        correct:2,
},
{   quetionText:"Ինչպե՞ս է սկսվում WHILE կրկնության օպերատորը :",
        answersList:["while i<=8:;","while(i<8,i++)","while i=1 to 8 "],
        correct:1,
},
]
let question=document.querySelector(".question");
let answors=document.querySelector(".answors");
let next=document.querySelector("#next");
let hushum=document.querySelector(".hushum");
let score=0;
let answersIndex=0;
let timeaccount=31;
let timeContainer=document.querySelector(".timer-container")
showQuestion();
next.addEventListener("click",nextQuestion)
function nextQuestion(){
    checkAnswors();
    clearScreen();
    answersIndex++;
    if(answersIndex<quizes.length){
       
    showQuestion();
    }else{
        question.innerHTML=`Դուք հավաքել եք ${score} միավոր`
       next.innerHTML="Restart"
        next.addEventListener("click",restart)
    }
    }
function showQuestion(){
    // timeaccount=61;
    setInterval(timer,1000);
    question.innerHTML=quizes[answersIndex].quetionText;
    for(let i=0;i<quizes[answersIndex].answersList.length;i++){
            answors.innerHTML+=`<input type="radio" id="answor${i+1}" name="answors" value="${i+1}">
            <label for="answor${i+1}">${quizes[answersIndex].answersList[i]}</label><br>`
        }
        }
function clearScreen(){
    question.innerHTML="";
    answors.innerHTML="";
}
function checkAnswors(){
if(answersIndex<quizes.length){   
let correctItem=quizes[answersIndex].correct;
 timeaccount=60;
let checkedAnswor=document.querySelector("input:checked");  
if(checkedAnswor==null){
    hushum.style.display="block";
    answersIndex--;
}else{
    hushum.style.display="none";
 let checkAnsworsValue=checkedAnswor.value;
    if(correctItem==checkAnsworsValue){
        score ++;    }
        console.log(score)
    }
  }}
function restart(){
    clearScreen();
    score=0;
    answersIndex=0;
    showQuestion();
    next.removeEventListener("click",restart)
    next.innerHTML="next"   
}
function timer(){
if(timeaccount>0){
    timeaccount--;
   timeContainer.innerHTML=timeaccount+"sek"


}else{
    nextQuestion()
}
}


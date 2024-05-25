"use strict";
// 
let AllTest = {
    "JavaScriptTest": [
        {
            quetionText: "Ո՞ր HTML տարրի ներսում ենք տեղադրում JavaScript-ը:",
            answersList: ["javascript", "script", "js", "scripting"],
            correct: 2,
        },
        {
            quetionText: "Որտեղ է ճիշտ տեղը JavaScript տեղադրելու համար:",
            answersList: ["The &lt;body&gt; section", " The &lt;head&gt; section", "  Both the &lt;head&gt; section and the &lt;body&gt; section are correct", "mark"],
            correct: 3,
        },
        {
            quetionText: "Որ թեգի միջոցով ենք կարող գրել շեղատառերով",
            answersList: ["b", "strong", "em", "mark"],
            correct: 3,
        },
        {
            quetionText: "Ո՞րն է «xxx.js» կոչվող արտաքին սկրիպտին հղում կատարելու ճիշտ շարահյուսությունը:",
            answersList: [" &lt;script href=՛xxx.js՛&gt;", "&lt;script name=՛xxx.js՛&gt;", "&lt;script src=՛xxx.js՛&gt;"],
            correct: 3,
        },
        // {
        //     quetionText: "Արտաքին JavaScript ֆայլը պետք է<br> պարունակի &lt;script&lt; պիտակը:",
        //     answersList: ["True", "False"],
        //     correct: 2,
        // },
        // {
        //     quetionText: "Ինչպե՞ս գրել «Բարև աշխարհ» alert վանդակում:",
        //     answersList: [" alertBox(«Բարև աշխարհ»)", "alert(«Բարև աշխարհ»)", "msgtBox(«Բարև աշխարհ»)", "msg(«Բարև աշխարհ»)"],
        //     correct: 2,
        // },
        // {
        //     quetionText: "Ինչպե՞ս ստեղծել function JavaScript-ում:",
        //     answersList: ["function myFunction()", "function=myFunction()", "function:myFunction()"],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Որ թեգի միջոցով ենք կարող գրել թավ տառերով",
        //     answersList: ["b", "strong", "em", "mark"],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Որ թեգի միջոցով կարող ենք գրել համարակալված ցուցակ",
        //     answersList: ["Ul", "Li", "ol", "table"],
        //     correct: 3,
        // },
        // {
        //     quetionText: "Որ թեգի միջոցով ենք կարող ստեղծել աղյուսակ",
        //     answersList: ["List", "Li", "ol", "table"],
        //     correct: 4,
        // },
        // {
        //     quetionText: "Ինչպե՞ս գրել IF հրամանը JavaScript-ում:",
        //     answersList: ["If(i==8)", "if i==5", "if i==5 then", "if i=5"],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Ինչպե՞ս գրել IF հրամանը որոշ կոդի կատարման համար,<br> եթե «i»-ն հավասար չէ 8-ի:",
        //     answersList: ["If(i!=8)", "if i!=8", "if i<(i<>8)", "if inot eq 8"],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Ինչպե՞ս է սկսվում WHILE կրկնության օպերատորը :",
        //     answersList: ["while(i<=8)", "while(i<8,i++)", "while i=1 to 8 "],
        //     correct: 1,
        // },
    ],

    "PythonTest": [
        {
            quetionText: "Ո՞րն է Python ֆայլերի ճիշտ ընդլայնումը:",
            answersList: [".py", ".pyth", ".pt", ".pyt"],
            correct: 1,
        },
        {
            quetionText: "Ո՞րն է ՈՉ իրավական փոփոխականի անունը:",
            answersList: ["my-var", "_myvar", "my-var", "Myvar"],
            correct: 3,
        },
        {
            quetionText: "Ինչպե՞ս գրել «Բարև աշխարհ» ",
            answersList: ["echo(«Բարև աշխարհ»)", "print(«Բարև աշխարհ»)", "echo«Բարև աշխարհ»", "msg(«Բարև աշխարհ»)"],
            correct: 2,
        },
        {
            quetionText: "Ինչպե՞ս ստեղծել function python-ում:",
            answersList: ["def myFunction():", "function=myFunction()", "def:myFunction()"],
            correct: 1,
        },
        // {
        //     quetionText: "Ո՞րն է ճիշտ շարահյուսությունը Python-ում փոփոխականի կամ օբյեկտի տեսակը դուրս բերելու համար:",
        //     answersList: ["print(type(x))", "print(typeof x)", "print(typeOf(x))", "print(typeof(x))"],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Ո՞րն է ճիշտ շարահյուսությունը տողի առաջին նիշը վերադարձնելու համար:",
        //     answersList: ["x = Hello[0];", "x = Hello.sub(0, 1)", "x = Hello".sub(0, 1)],
        //     correct: 1,
        // },
        // {
        //     quetionText: "Ո՞ր մեթոդը կարող է օգտագործվել տողի մասերը փոխարինելու համար:",
        //     answersList: ["rep() ", "replaceString() ", "switch() ", "replace()  "],
        //     correct: 4,
        // },
        // {
        //     quetionText: "Ո՞ր օպերատորն է օգտագործվում թվերը բազմապատկելու համար:",
        //     answersList: ["%", "+", "*", "/"],
        //     correct: 3,
        // },
        // {
        //     quetionText: "Ինչպե՞ս գրել IF հրամանը որոշ կոդի կատարման համար,<br> եթե «i»-ն հավասար չէ 8-ի:",
        //     answersList: ["If(i!=8)", "if i!=8:", "if i<(i<>8)", "if inot eq 8"],
        //     correct: 2,
        // },
        {
            quetionText: "Ինչպե՞ս է սկսվում WHILE կրկնության օպերատորը :",
            answersList: ["while i<=8:", "while(i<8,i++)", "while i=1 to 8 "],
            correct: 1,
        },]
}

var progress = document.querySelector(".progress");
var progressShow = document.querySelector(".progressShow")

var question = document.querySelector(".question");

var next = document.querySelector("#next");
var hushum = document.querySelector(".hushum");


let btnTest = document.querySelector("#btnTest")
btnTest.addEventListener("click", function () {
    let TestChecked = document.querySelector("[name='LanguageTest']:checked").value;
    console.log(TestChecked)
    testProgrammLanguages(AllTest[TestChecked])
})

function testProgrammLanguages(quizes) {
    let answors = document.querySelector(".answors");
    clearScreen();
    let timeaccount = 1;
    let timeVarkyan = 59;
    let answersIndex = 0;

    let score = 0;
    let timeContainer = document.querySelector(".timer-container")
    let timerIndicator = setInterval(timer, 1000);
    showQuestion();
    next.addEventListener("click", nextQuestion)

    function nextQuestion() {
        checkAnswors();
        clearScreen();
        answersIndex++;
        if (answersIndex < quizes.length) {
            showQuestion();
        } else {
            result();
            next.removeEventListener("click", nextQuestion)
        }
    }
    // timeaccount = 1;
    function result() {
        clearInterval(timerIndicator);
        question.innerHTML = `Դուք հավաքել եք ${score} միավոր`
        next.innerHTML = "END"
        next.addEventListener("click", EndTest)
    }
    function showQuestion() {
        //    setInterval(timer,1000);

        question.innerHTML = quizes[answersIndex].quetionText;
        for (let i = 0; i < quizes[answersIndex].answersList.length; i++) {
            answors.innerHTML += `<input type="radio" id="answor${i + 1}" name="answors" value="${i + 1}">
            <label for="answor${i + 1}">${quizes[answersIndex].answersList[i]}</label><br>`
        }
        progressLine();
    }
    function clearScreen() {
        question.innerHTML = "";
        answors.innerHTML = "";

    }
    function checkAnswors() {
        if (answersIndex < quizes.length) {
            let correctItem = quizes[answersIndex].correct;
            console.log(correctItem);
            // timeaccount = 1;
            console.log(answors)
            let checkedAnswor = answors.querySelector("input:checked");
            console.log(checkedAnswor)
            if (checkedAnswor == null) {
                hushum.style.display = "block";
                answersIndex--;
            } else {
                hushum.style.display = "none";
                let checkAnsworsValue = checkedAnswor.value;
                if (correctItem == checkAnsworsValue) {
                    answersIndex++;
                    score++;
                }
                console.log(score)
            }
        }
    }
    function EndTest() {

        clearScreen();
        score = 0;
        answersIndex = 0;
        timeaccount = 1;
        timeVarkyan = 60;
        // setInterval(timer, 1000);
        // showQuestion();
        next.removeEventListener("click", EndTest)
        next.innerHTML = "next"
    }
    function timer() {
        // progressLine();
        timeVarkyan--;
        if (timeVarkyan == 0 && timeaccount == 0) {
            clearInterval(timerIndicator);
            result();
        }
        timeContainer.innerHTML = timeaccount + " : " + timeVarkyan
        if (timeVarkyan == 0) {
            timeaccount--;
            timeVarkyan = 60;
        }
    }
    function progressLine() {
        progress.style.width = (+answersIndex + 1) * 100 / quizes.length + "%"
        progressShow.innerHTML = answersIndex + 1 + "/" + quizes.length;
    }
}
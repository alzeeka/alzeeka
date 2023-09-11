setTimeout(displayResult, 20 * 60 * 1000); // يعادل 20 دقيقة


function handleThemeChange() {
    const themeCheckbox = document.getElementById('checkbox');
    const selectedTheme = themeCheckbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', selectedTheme);
    const body = document.body;
    if (selectedTheme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const body = document.body;
        if (savedTheme === 'dark') {
          body.classList.add('dark');
          document.getElementById("checkbox").checked=true;
        } else {
          body.classList.remove('dark');
        }
    }
  });

const quizData = [{
    question: "What is the purpose of System.out.print() in Java?",
    a: "a) To print text on the console.",
    b: "b) To read input from the user",
    c: "c) To declare variables.",
    d: "d) To perform mathematical calculations.",
    correct: "a",},
{
    question: 'What will be the output of the following code?<br><br> <p class="fs-6 bg-dark p-2">System.out.print("Hello");<br>System.out.print("World");</p> ',
    a: "a) World",
    b: "b) Hello World",
    c: "c) Hello",
    d: "d) HelloWorld",
    correct: "d",},
{
    question: "What is the purpose of a variable declaration in a Java program?",
    a: "a. To define the type of data that will be stored in a variable",
    b: "b. To initialize a variable with a default value",
    c: "c. To change the value of a variable",
    d: "d. To declare a variable without assigning a value",
    correct: "a",},
{
    question: "Which symbol is used as the assignment operator in Java?",
    a: " + ",
    b: " = ",
    c: " * ",
    d: " - ",
    correct: "b",},
{
    question: "What are the arithmetic operators used in Java?",
    a: "+,-,*,/,%,=",
    b: "+,-,*,/,%,&",
    c: "+,-,*,/,%,^",
    d: "+,-,*,/,%,!",
    correct: "a",},
{
    question: "What is the resulting type when an arithmetic operator is combined with int operands?",
    a: "String",
    b: "int",
    c: "double",
    d: "float",
    correct: "b",},
{
    question: "What is the result of 15/2?",
    a: "7.5",
    b: "8",
    c: "7",
    d: "3",
    correct: "c",},
{
    question: "What does the % operator do?",
    a: "Perform a modulo operation",
    b: "Recover the information lost after performing integer division",
    c: "Perform a type cast",
    d: "Count by twos",
    correct: "a",},
{
    question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>System.out.println( c++ );</p> ',
    a: "6",
    b: "5",
    c: "c",
    d: "c++",
    correct: "b",},
{
    question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>System.out.println( ++c );</p> ',
    a: "6",
    b: "5",
    c: "c",
    d: "++c",
    correct: "a",},
];

let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
    if(total === index){
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)



document.querySelector("#reset").addEventListener(
        "click",
        function(){
            allInputs.forEach(
                (inputEl) => {
                    inputEl.checked = false;
                }
            )
        }
)


const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
    let unanswered = total - (correct + incorrect);
    let incorrectQuestions = [];
    
    for (let i = 0; i < total; i++) {
        if (quizData[i].correct !== getAnswer(i)) {
            incorrectQuestions.push(quizData[i]);
        }
    }
    
    document.getElementsByClassName("container2")[0].innerHTML = `
        <div class="col text-center mb-5">
            <div class="bg-light "> <h3 class="w-100 text-dark "> انتهى الكويز </h3><hr></div>
            <h2 class="w-100 mb-5">${total} : ${correct}  درجتك هي  </h2><hr>
            <h5 class="w-100 mb-5"> الأسئلة التي لم تجب عليها بشكل صحيح هي بالأسفل</h5><hr>
            
            <ul class="text-start  bg-dark">
                ${incorrectQuestions.map((question) => `<li class="text-danger">${question.question}</li><hr>`).join("")}
            </ul>
            <button class="reload btn-warning mb-5" type='button' onclick=location.reload(); > إعادة الإختبار </button>
        </div>`;
        var div1 = document.getElementById("timer");
        div1.style.display = "none";
};

loadQuestion(index);

function displayResult() {
    let unanswered = total - (correct + incorrect);
    let incorrectQuestions = [];
   
    for (let i = 0; i < total; i++) {
        if (quizData[i].correct !== getAnswer(i)) {
            incorrectQuestions.push(quizData[i]);
        }
    }
   
    document.getElementsByClassName("container2")[0].innerHTML = `
        <div class="col text-center mb-5">
            <div class="bg-light "> <h3 class="w-100 text-dark "> انتهى الكويز </h3><hr></div>
            <h2 class="w-100 mb-5">${total} : ${correct}  درجتك هي  </h2><hr>
            <h5 class="w-100 mb-5"> الأسئلة التي لم تجب عليها بشكل صحيح هي بالأسفل</h5><hr>
           
            <ul class="text-start  bg-dark">
                ${incorrectQuestions.map((question) => `<li class="text-danger">${question.question}</li><hr>`).join("")}
            </ul>
            <button class="reload btn-warning mb-5" type='button' onclick=location.reload(); > إعادة الإختبار </button>
        </div>`;
        var div1 = document.getElementById("timer");
        div1.style.display = "none";
  }
  

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
      document.getElementById("checkbox").checked = true;
    } else {
      body.classList.remove('dark');
    }
  }
});

const quizData = [{
    question: "Which component of a computer is considered the brain of the system?",
    a: "a) CPU",
    b: "b) Input/Output devices",
    c: "c) Main memory",
    d: "d) Secondary storage",
    correct: "a",},
{
    question: 'What happens to the data and programs when a computer is turned off? ',
    a: "a) They are transferred to secondary storage",
    b: "b) They are manipulated",
    c: "c) They are displayed as results",
    d: "d) They are lost",
    correct: "d",},
{
    question: "Which of the following is an example of secondary storage?",
    a: "a. Hard disk",
    b: "b. Mouse",
    c: "c. Monitor",
    d: "d. Keyboard",
    correct: "a",},
{
    question: "What type of programs take control of the computer?",
    a: " Application programs ",
    b: " System programs ",
    c: " High-level languages ",
    d: " Machine language ",
    correct: "b",},
{
    question: "What is the language of a computer?",
    a: "Assembly language",
    b: "High-level language",
    c: "Machine language",
    d: "Binary code",
    correct: "c",},
{
    question: "What is the purpose of an assembler?",
    a: "To execute a C++ program",
    b: "To combine object program with other programs",
    c: "To translate a program written in assembly language into machine language",
    d: "To create a source program in C++",
    correct: "c",},
{
    question: "Which of the following is a high-level language?",
    a: "Binary code",
    b: "ASCII",
    c: "C++",
    d: "machine language",
    correct: "c",},
{
    question: "What is the first step in the problem-solving process?",
    a: "Understand problem requirements",
    b: "Analyze the problem",
    c: "Outline the problem requirements",
    d: "Design steps to solve the problem",
    correct: "b",},
{
    question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>cout<<"the value of c : "<<c;</p> ',
    a: "the value of c : c",
    b: "the value of c : 5",
    c: "c",
    d: "5",
    correct: "b",},
{
    question: 'What is the final step in the Problem Analysis-Coding-Execution Cycle?',
    a: "Place program into main memory for execution",
    b: "Link machine code with system resources",
    c: "Run code through compiler",
    d: "Execute the program",
    correct: "a",},

{
      question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>cout<<"the value of c : "<<c;</p> ',
      a: "the value of c : c",
      b: "the value of c : 5",
      c: "c",
      d: "5",
      correct: "b",},

{
      question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">cout<<"hello"<<endl;<br>cout<<"word"<<endl;</p> ',
      a: "helloword",
      b: "hello<br>word",
      c: "hello word",
      d: "error",
      correct: "b",},

{
      question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">cout<<"hello";<br>cout<<"word"<<endl;</p> ',
      a: "helloword",
      b: "hello<br>word",
      c: "hello word",
      d: "error",
      correct: "a",},

{
      question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">cout<<"hello ";<br>cout<<"word";</p> ',
      a: "helloword",
      b: "hello<br>word",
      c: "hello word",
      d: "error",
      correct: "c",},
{
        question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>int x = 4;<br>cout<<c + x;</p> ',
        a: "c + x",
        b: "5",
        c: "9",
        d: "c + x = 9",
        correct: "c",},

{
          question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">int c = 5;<br>int x = 4;<br>cout<<"c + x = "<<c + x;</p> ',
          a: "c + x",
          b: "5",
          c: "9",
          d: "c + x = 9",
          correct: "d",},

{
        question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">float c = 7;<br>int x = 3;<br>cout<<c / x;</p> ',
        a: "2",
        b: "2.5",
        c: "error",
        d: "c / x ",
        correct: "b",},
    {
      question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">cout<<"welcome \n";<br>cout<<"in c++";</p> ',
      a: "welcome in c++",
      b: "welcomeinc++",
      c: "error",
      d: "welcome <br>in c++",
      correct: "d",},
      {
        question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">string name = "c++";<br>cout<<"welcome : "<<name;</p> ',
        a: "welcome : c++",
        b: "welcome : <br>c++",
        c: "welcome",
        d: "welcome : name",
        correct: "a",},
        {
          question: 'What is the output?<br><br> <p class="fs-6 bg-dark p-2">string name1 = "ahmed";<br>string name2 = "ali";<br>cout<<name1+name2;</p> ',
          a: "ahmed ali",
          b: "ahmedali",
          c: "name1name2",
          d: "name1 name2",
          correct: "b",},
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");

const loadQuestion = () => {
  if (total === index) {
    return displayResult();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
});

document.querySelector("#reset").addEventListener("click", function () {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
});

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
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
        <img class="w-50 rounded-circle bg-success" src="../img/v.png"/>
        <div class="bg-light "> <h3 class="w-100 text-dark p-5 mt-0"> انتهى الكويز </h3><hr></div>
        <h2 class="w-100 mb-5">${total}  : درجة الكويز هي  </h2>
        <h2 class="w-100 mb-5">${correct}  : درجتك هي  </h2>
        <hr><hr>
       <!-- <h5 class="w-100 mb-5"> الأسئلة التي لم تجب عليها بشكل صحيح هي بالأسفل</h5><hr>
       
        <ul class="text-start  bg-dark">
            ${incorrectQuestions
              .map((question) => `<li class="text-danger">${question.question}</li><hr>`)
              .join("")}
        </ul>-->
        <button class="reload btn-warning mb-5" type='button' onclick=location.reload(); > إعادة الإختبار </button>
    </div>`;
  var div1 = document.getElementById("timer");
  div1.style.display = "none";
}
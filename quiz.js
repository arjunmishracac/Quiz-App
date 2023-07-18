const quizData=[
    {
        question: "Who is the words first programmer?",
        a:"lady levorence",
        b:"Nikola Tesla",
        c:"Charley chaplin",
        d:"Chales bebage",
        correct: "d",
    },
    {
        question: "Fastest Train of India?",
        a:"Gatiman Express",
        b:"Superfast",
        c:"Rajdhani Express",
        d:"Passenger",
        correct: "a",

    },
    {
        question: "Worlds first os is.",
        a:"android",
        b:"linux",
        c:"unix",
        d:"machitosh",
        correct: "c",  
    },
    {
        question: "A disk where number of sectors are fixed is called.",
        a:"Hard sector",
        b:"CD",
        c:"Floppy disk",
        d:"Soft sctor",
        correct: "a",
    },
    {
        question: "Who is the father of computers?",
        a:"lady levorence",
        b:"Nikola Tesla",
        c:"Charley chaplin",
        d:"Chales bebage",
        correct: "d",
    }
];
//Referencing HTML Elements
const question = document.querySelector('.question');
const option1 = document.getElementById('a_text');
const option2 = document.getElementById('b_text');
const option3 = document.getElementById('c_text');
const option4 = document.getElementById('d_text');
const submit =document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.getElementById('quiz-conatiner');
let questionCount=0;
let score=0;
 
//Loading the questions
const loadQuestion=()=> {
    const questionList =quizData[questionCount];
    question.innerText =questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

}
loadQuestion();


//Checking the answers
const getCheckAnswer= () =>{
    let answer;
    answers.forEach(curAnsElem => {
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
        
    });
    return answer;

};


//Deselecting the answers
const deselectAll= ()=> {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

//Onclick Submit
submit.addEventListener('click' , ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizData[questionCount].correct){
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount< quizData.length){
        loadQuestion();

    }else{
            showScore.innerHTML =`
            <h3> You scored ${score}/${quizData.length} 😉</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
            showScore.classList.remove('scoreArea');
    }
});
console.log('hello')
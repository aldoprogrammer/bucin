const quizData = [
    {
        question: 'Chat tiap hari?',
        a: 'Iya',
        b: 'Engga',
        c: 'Aku banget',
        d: 'Ga juga sih',
        correct: 'c'
    }, {
        question: "Pernah ciuman?",
        a: 'Baru kemaren',
        b: 'Sering',
        c: 'Stay halal brother',
        d: 'Mau, tapi gamo dosa',
        correct: 'a'
    }, {
        question: "Pernah pesanin grab-food?",
        a: 'Sesekali',
        b: 'Mending nabung',
        c: 'Mo beli kuota aja',
        d: 'Aku sendiri aja laper',
        correct: 'a'
    }, {
        question: "Berapa lama kamu nunggu pacar pulang sekolah/kerja/kuliah?",
        a: "2 jam",
        b: "30 menit",
        c: "15 aja udah ga tahan",
        d: "Cus aja lah ya",
        correct: "a"
    }
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const judul = document.getElementById('judul');
const judul2 = document.getElementById('judul2');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    

    const answer = getSelected();
    const scorePerCent = Math.round(100 * score/quizData.length);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        function sembunyi(){
            judul.style.display = "none";
          }  
          function muncul(){
            judul2.style.display = "flex";
          }
        

        currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
            //    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Give a Try Again!</button>`;
            //    quiz.innerHTML = `<h2>Kamu itu ${scorePerCent}% bucin</h2><button onclick="location.reload()">Give a Try Again!</button>`;
            // quiz.innerHTML += "<p>Kamu "+ scorePerCent +"% Bucin</p>";
            sembunyi();
            muncul();
            quiz.innerHTML = `<h2>Kamu itu ${Math.round(100 * score/quizData.length)}% bucin &#128517&#128541.</h2><button onclick="location.reload()">Give a Try Again!</button>`;
        }
}
    
});

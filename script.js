const quizData = [
    {
        question: 'How old is Bola?',
        a_1: '20',
        b: '10',
        c: '90',
        d: '8',
        correct: 'd'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the President of US?',
        a: 'Jeov',
        b: 'Joe Biden',
        c: 'Ola PoP',
        D: 'pito pi',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'cascading Style Sheet',
        c: 'Jaon Object Notation',
        d: 'Application Programming Interface',
        correct : 'a'
    }, {
        question: 'What year was javaScript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none',
        correct: 'b'
    }
];


const questionEl = document.getElementById('question');
 const a_text = document.getElementById('a_text');
 const b_text = document.getElementById('b_text');
 const c_text = document.getElementById('c_text');
 const d_text = document.getElementById('d_text');
 const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}


submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else{
        // TODO: show results
        alert("You finished get yourself an Orange Juice!");
    }

   
})


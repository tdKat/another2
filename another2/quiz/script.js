const questions = [
    {
      question: "What is the capital of Missouri?",
      answers: ["A) Kansas City", "B) Jefferson City", "C) St. Louis"],
      correct: "B"
    },
    {
      question: "How many ounces in a pound?",
      answers: ["A) 10", "B) 12", "C) 16"],
      correct: "C"
    },
    {
      question: "Who was the first person to set foot on the moon?",
      answers: ["A) Buzz Aldrin", "B) Yuri Gagarin", "C) Neil Armstrong"],
      correct: "C"
    },
    {
      question: "Who holds the Major League Baseball record for most home runs in a season?",
      answers: ["A) Barry Bonds", "B) Mark McGwire", "C) Sammy Sosa"],
      correct: "A"
    },
    {
      question: "In what year was University of Liverpool founded?",
      answers: ["A) 1250", "B) 1881", "C) 1900"],
      correct: "B"
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["A) Earth", "B) Jupiter", "C) Saturn"],
      correct: "B"
    },
    {
      question: "What is the chemical symbol for gold?",
      answers: ["A) Au", "B) Ag", "C) Fe"],
      correct: "A"
    },
    {
      question: "How many continents are there on Earth?",
      answers: ["A) 5", "B) 6", "C) 7"],
      correct: "C"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["A) Gold", "B) Diamond", "C) Iron"],
      correct: "B"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["A) Harper Lee", "B) Mark Twain", "C) J.K. Rowling"],
      correct: "A"
    }
  ];
  
  document.getElementById('start-quiz').addEventListener('click', startQuiz);
  
  function startQuiz() {
    const numQuestions = parseInt(document.getElementById('num-questions').value) || 5;
    const selectedQuestions = getRandomQuestions(numQuestions);
    displayQuestions(selectedQuestions);
  }
  
  function getRandomQuestions(num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  function displayQuestions(questions) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
  
    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
  
      const questionText = document.createElement('p');
      questionText.textContent = q.question;
      questionDiv.appendChild(questionText);
  
      const answersDiv = document.createElement('div');
      answersDiv.className = 'answers';
      q.answers.forEach((answer, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = answer[0];
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
        answersDiv.appendChild(document.createElement('br'));
      });
  
      questionDiv.appendChild(answersDiv);
      quizContainer.appendChild(questionDiv);
    });
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answers';
    submitButton.addEventListener('click', () => checkAnswers(questions));
    quizContainer.appendChild(submitButton);
  }
  
  function checkAnswers(questions) {
    let correctCount = 0;
    const quizContainer = document.getElementById('quiz-container');
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    questions.forEach((q, index) => {
      const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      if (userAnswer) {
        const userAnswerValue = userAnswer.value;
        const resultText = document.createElement('p');
        resultText.textContent = `${q.question} You guessed ${userAnswerValue}) ${q.answers[userAnswer.value.charCodeAt(0) - 65]} - ${userAnswerValue === q.correct ? 'CORRECT' : `INCORRECT: the correct answer is ${q.correct}) ${q.answers[q.correct.charCodeAt(0) - 65]}`}`;
        resultsDiv.appendChild(resultText);
  
        if (userAnswerValue === q.correct) {
          correctCount++;
        }
      } else {
        const resultText = document.createElement('p');
        resultText.textContent = `${q.question} No answer selected - INCORRECT: the correct answer is ${q.correct}) ${q.answers[q.correct.charCodeAt(0) - 65]}`;
        resultsDiv.appendChild(resultText);
      }
    });
  
    const scoreText = document.createElement('p');
    const totalQuestions = questions.length;
    const percentage = (correctCount / totalQuestions) * 100;
    scoreText.textContent = `You answered ${correctCount} out of ${totalQuestions} questions correctly (${percentage.toFixed(2)}%).`;
    resultsDiv.appendChild(scoreText);
  }
  
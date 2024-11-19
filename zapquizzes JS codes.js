// Sample questions for the Global Leaders Quiz
const globalLeadersQuiz = [
  {
    question: "Who is the current Prime Minister of Canada?",
    options: ["Justin Trudeau", "Stephen Harper", "Andrew Scheer", "Thomas Mulcair"],
    answer: "Justin Trudeau",
  },
  {
    question: "Who is the President of the United States (as of 2024)?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"],
    answer: "Joe Biden",
  },
  {
    question: "Who is the Chancellor of Germany?",
    options: ["Angela Merkel", "Olaf Scholz", "Gerhard Schröder", "Annalena Baerbock"],
    answer: "Olaf Scholz",
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
    answer: "Narendra Modi",
  },
  {
    question: "Who is the President of Russia?",
    options: ["Vladimir Putin", "Dmitry Medvedev", "Sergey Lavrov", "Mikhail Mishustin"],
    answer: "Vladimir Putin",
  },
  {
    question: "Who is the President of France?",
    options: ["Emmanuel Macron", "Nicolas Sarkozy", "François Hollande", "Marine Le Pen"],
    answer: "Emmanuel Macron",
  },
  {
    question: "Who is the Prime Minister of the United Kingdom?",
    options: ["Rishi Sunak", "Boris Johnson", "Liz Truss", "Keir Starmer"],
    answer: "Rishi Sunak",
  },
  {
    question: "Who is the President of Brazil?",
    options: ["Luiz Inácio Lula da Silva", "Jair Bolsonaro", "Dilma Rousseff", "Michel Temer"],
    answer: "Luiz Inácio Lula da Silva",
  },
  {
    question: "Who is the President of South Korea?",
    options: ["Yoon Suk-yeol", "Moon Jae-in", "Park Geun-hye", "Lee Myung-bak"],
    answer: "Yoon Suk-yeol",
  },
  {
    question: "Who is the Prime Minister of Japan?",
    options: ["Fumio Kishida", "Shinzo Abe", "Yoshihide Suga", "Taro Aso"],
    answer: "Fumio Kishida",
  },
];

// Function to start the Global Leaders Quiz
function startQuiz(quizName) {
  if (quizName === "Global Leaders") {
    renderQuiz(globalLeadersQuiz, quizName);
  } else {
    alert("Starting quiz: " + quizName);
  }
}

// Function to render the quiz
function renderQuiz(quiz, quizName) {
  const quizSection = document.getElementById("quiz-section");
  quizSection.innerHTML = `<h3>${quizName} Quiz</h3>`;

  quiz.forEach((question, index) => {
    const questionHTML = `
      <div class="quiz-question">
        <p><strong>Q${index + 1}:</strong> ${question.question}</p>
        ${question.options
          .map(
            (option, i) =>
              `<label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
              </label><br>`
          )
          .join("")}
      </div>
    `;
    quizSection.innerHTML += questionHTML;
  });

  quizSection.innerHTML += `
    <button class="btn" onclick="submitQuiz('${quizName}')">Submit Quiz</button>
  `;
}

// Function to submit the quiz and show the score
function submitQuiz(quizName) {
  const quiz = quizName === "Global Leaders" ? globalLeadersQuiz : [];
  let score = 0;

  quiz.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption && selectedOption.value === question.answer) {
      score++;
    }
  });

  alert(`You scored ${score}/${quiz.length} on the ${quizName} Quiz!`);
}

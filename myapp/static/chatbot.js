let questions = [
    {
      question: "Do you feel happy?",
      options: { a: "Yes", b: "No" },
      correctAnswer: "a",
      correctResponse: "Super! 😊",
      incorrectResponse: "I am sorry 😔"
    },
    {
      question: "Do you enjoy coding?",
      options: { a: "Yes", b: "No" },
      correctAnswer: "a",
      correctResponse: "That's great! Keep it up!",
      incorrectResponse: "Maybe try a different language?"
    }
  ];
  
  let currentQuestionIndex = 0;
  let chatContainer = document.getElementById("chat-container");
  let chatForm = document.getElementById("chat-form");
  let userInput = document.getElementById("user-input");
  
  function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options)
      .map(key => `${key}. ${currentQuestion.options[key]}`)
      .join(" ");
  
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;
    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
  }
  
  function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userResponse = userInput.value.trim().toLowerCase();
  
    if (!userResponse) return;
  
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);
  
    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
  
    if (userResponse === currentQuestion.correctAnswer) {
      botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.correctResponse}`;
    } else {
      botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.incorrectResponse}`;
    }
  
    chatContainer.appendChild(botResponse);
  
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();
  });
  
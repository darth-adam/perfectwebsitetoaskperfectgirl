const questions = [
    { text: "Wanna be my Pam to my Jim???", image: "images/pam_and_jim.jpg" },
    { text: "What about my Padme to my Anakin????", image: "images/padme_and_anakin.jpg" },
    { text: "Okay fine, what about my Lucy to my David?", image: "images/lucy_and_david.jpg" },
    { text: "What about my Atom Eve to my Invincible??", image: "images/atom_eve_and_invincible.jpg" },
    { text: "What about my Anna to my Artyom?", image: "images/anna_and_artyom.jpg" },
];

let currentIndex = 0;
const imageElement = document.getElementById("image");
const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const responseText = document.getElementById("response-text");
const sadSpongeBob = document.getElementById("sad-spongebob");
const happyCouple = document.getElementById("happy-couple");
const backgroundMusic = document.getElementById("background-music");
const bassSound = document.getElementById("bass-sound");
const gokuMusic = document.getElementById("goku-music");
const container = document.querySelector(".container");

// Play background music when the page loads
window.addEventListener("load", () => {
    backgroundMusic.play().catch(() => {
        // Autoplay was blocked, handle it here (e.g., show a play button)
        console.log("Autoplay blocked. Please interact with the page to play music.");
    });
});

// Function to update the question and image
function updateQuestion() {
    if (currentIndex < questions.length) {
        imageElement.src = questions[currentIndex].image;
        questionElement.textContent = questions[currentIndex].text;
    } else {
        // Final state: Prowler Goku appears
        imageElement.src = "images/prowler_goku.jpg";
        questionElement.textContent = "I am not asking.";
        container.classList.add("final-state");
        // Stop background music and play Goku music
        backgroundMusic.pause();
        gokuMusic.play();
    }
}

// Function to show Sad SpongeBob image
function showSadSpongeBob() {
    sadSpongeBob.classList.remove("hidden");
    sadSpongeBob.classList.add("visible");
    setTimeout(() => {
        sadSpongeBob.classList.remove("visible");
        sadSpongeBob.classList.add("hidden");
    }, 500); // Hide after 0.5 seconds
}

// Function to show Happy Couple image and message
function showHappyCouple() {
    imageElement.src = "images/happy_couple.jpg";
    questionElement.textContent = "Knew it!";
    responseText.textContent = "Can't wait to be happy and make you happy.";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    // Stop Goku music and resume background music
    gokuMusic.pause();
    backgroundMusic.play();
}

// Event listener for the "NO" button
noButton.addEventListener("click", () => {
    currentIndex++;
    updateQuestion();
    // Make YES button bigger and NO button smaller
    yesButton.style.fontSize = `${20 + currentIndex * 5}px`;
    noButton.style.fontSize = `${20 - currentIndex * 5}px`;
    // Show Sad SpongeBob image and play bass sound
    showSadSpongeBob();
    bassSound.play();
});

// Event listener for the "YES" button
yesButton.addEventListener("click", () => {
    if (currentIndex < questions.length) {
        // Before Goku appears
        showHappyCouple();
    } else {
        // After Goku appears
        showHappyCouple();
    }
});

// Initialize the first question
updateQuestion();
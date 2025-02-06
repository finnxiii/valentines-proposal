const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const gifDisplay = document.getElementById('gif-display');
const valentineQuestion = document.getElementById('valentine-question');
const buttons = document.getElementById('buttons');

let clickCount = 0;
let buttonHeight = 23;

yesButton.addEventListener('click', () => {
    gifDisplay.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtrOXJzbXQ1bjY0ZW00OWU5dzdyZHcxY3RkZzEwampmb21vanByeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RBBWIAfTzuHxS/giphy.gif';
    valentineQuestion.textContent = "Yayyyy!!! I love you so much Pookieee. This is us btw<3";
    valentineQuestion.style.fontSize = '2em';
    buttons.style.display = 'none';
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
});

noButton.addEventListener('mouseover', function () {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    this.style.position = 'absolute';
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
});


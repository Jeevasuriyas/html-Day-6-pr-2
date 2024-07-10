const button = document.querySelector(".styled-button");
const body = document.querySelector("body");
const message = document.getElementById("message");
const color = ['violet', 'indigo', 'blue', 'yellow', 'green', 'orange', 'red'];
let isFirstClick = true;

// Change color on button click and display message after first click
button.addEventListener('click', function() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];

    if (isFirstClick) {
        message.style.display = 'block';
        message.classList.add('show');
        isFirstClick = false;
    }
});

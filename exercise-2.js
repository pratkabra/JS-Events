const incrementButton = document.querySelector('#increment-btn')
const countDisplay = document.querySelector('#count-display')
const decrementButton = document.querySelector('#decrement-btn')

decrementButton.addEventListener("click", (event) => {
    countDisplay.value--;
});

incrementButton.addEventListener("click", (event) => {
    countDisplay.value++;
});
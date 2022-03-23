const counterBtn =  document.querySelector('#counter-btn')

counterBtn.addEventListener("click", (event) => {
    event.target.value++;
});
const userInput = document.querySelector('#user-input')

userInput.addEventListener("input", (event) => {
    let inputLength = userInput.value.length;
    document.getElementById("noOfChars").innerHTML = `The above text has ${inputLength} characters`;
});
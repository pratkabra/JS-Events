const userInput = document.querySelector('#user-input')
const encodeButton = document.querySelector('#encode-btn')
const decodeButton = document.querySelector('#decode-btn')
const Result = document.querySelector('#result')


encodeButton.addEventListener("click", () => {
    let url = userInput.value;
    Result.value = encodeURIComponent(url);
});

decodeButton.addEventListener("click", () => {
    let encodedURL = userInput.value;
    Result.value = decodeURIComponent(encodedURL);
});
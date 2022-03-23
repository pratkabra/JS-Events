const hexInput = document.querySelector('#hex-input')

hexInput.addEventListener("input", (event) => {
    let hexCode = hexInput.value;
    document.getElementById("color-box").style.backgroundColor = hexCode;
});
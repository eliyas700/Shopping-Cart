function updateInputValue(product, price, isAdd) {
    const inputText = document.getElementById(product + "-number");
    let inputValue = inputText.value;
    if (isAdd) {
        inputText.value = parseInt(inputValue) + 1;

    }
    else if (inputValue > 0) {
        inputText.value = parseInt(inputValue) - 1;
    }
    inputValue = inputText.value;
    const caseText = document.getElementById(product + '-total');

    caseText.innerText = inputValue * price;

}

// Main Part
//Phone Part
document.getElementById('phone-plus').addEventListener('click', function () {
    updateInputValue('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInputValue('phone', 1219, false);
})
//Case Part
document.getElementById('case-plus').addEventListener('click', function () {
    updateInputValue('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateInputValue('case', 59, false);
});
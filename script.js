function appendToResult(value) {
    document.getElementById('result').value += value;
}
function clearResult() {
    document.getElementById('result').value = '';
}
function evaluateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);

    document.getElementById('result').value = calculatedResult;
}

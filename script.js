let history = [];

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function evaluateResult() {
    const resultField = document.getElementById('result');
    const result = resultField.value;
    try {
        const calculatedResult = eval(result).toFixed(2);
        const dateTime = new Date().toLocaleString();        
        resultField.value = calculatedResult;
        addToHistory(calculatedResult, `Gerado em ${dateTime}`);
    } catch (error) {
        resultField.value = 'Erro';
    }
}

function addToHistory(calculatedResult, dataTime){
    history.push({calculatedResult, dataTime});
    updateHistoryTable();
}

function updateHistoryTable(){
    const tableBody=document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    
    history.forEach(({dataTime, calculatedResult}) => {
        const row = tableBody.insertRow();
        const cellResult = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellResult.textContent = calculatedResult;
        cellData.textContent = dataTime;

        cellResult.onclick = () => {
            document.getElementById('result').value = calculatedResult;
        };
    });
}
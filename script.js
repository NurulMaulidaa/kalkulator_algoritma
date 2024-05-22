document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const algorithm = document.getElementById('algorithm').value;
    const inputSize = parseInt(document.getElementById('inputSize').value);
    let result = '';

    if (algorithm === 'linear') {
        result = `Linear Search membutuhkan sekitar ${inputSize} langkah untuk ukuran input ${inputSize}.`;
    } else if (algorithm === 'binary') {
        const steps = Math.ceil(Math.log2(inputSize));
        result = `Binary Search membutuhkan sekitar ${steps} langkah untuk ukuran input ${inputSize}.`;
    }

    document.getElementById('result').innerText = result;
});

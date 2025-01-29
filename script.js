document.getElementById('interest-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const principal = parseFloat(document.getElementById('p-a').value);
    const rate = parseFloat(document.getElementById('a-i').value) / 100;
    const time = parseFloat(document.getElementById('t-p').value);
    const frequency = document.getElementById('frequency').value;
    let n;
    switch(frequency) {
        case 'daily':
            n = 365;
            break;
        case 'monthly':
            n = 12;
            break;
        case 'quaterly':
            n = 4;
            break;
        case 'semi':
            n = 2;
            break;
        case 'annually':
            n = 1;
            break;
        default:
            n = 1;
    }

    const amount = principal * Math.pow(1 + (rate / n), n * time);
    const finalAmount = amount.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('final-amount').textContent = finalAmount;
});
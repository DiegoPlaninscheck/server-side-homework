async function calculate() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let operator = document.getElementById("operator").value;

    let data = {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        operator: operator,
    };

    const result = await (await fetch("/calculator", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) })).json();

    alert("Result: " + result);
}   
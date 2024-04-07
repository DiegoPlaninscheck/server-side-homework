async function calculateIMC() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let data = {
        weight: weight,
        height: height,
    };

    const result = await (await fetch("/calculate-IMC", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) })).json();

    alert("Result: " + result);
}   
var div = document.getElementById("resposta");

function conversão(){

    let celsius = parseFloat(document.getElementById("iCelsius").value);
    let operador = document.getElementById("select").value;
    let text;

    switch (operador){

        case "Fahrenheit":
            text = `<p> ${celsius} * ${9/5} + ${32} = ${(celsius*(9/5)) + 32} °F </p>`;
            break;
        case "Kelvin":
            text = `<p> ${celsius} + ${273.15} = ${celsius+273.15} K </p>`;

    }
    div.innerHTML = text;
}


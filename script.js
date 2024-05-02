function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var selectFrom = document.getElementById("selectFrom").value;
    var selectTo = document.getElementById("selectTo").value;
    var result;

    if (selectFrom === "celsius") {
        if (selectTo === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (selectTo === "kelvin") {
            result = inputTemp + 273.15;
        } else {
            result = inputTemp;
        }
    } else if (selectFrom === "fahrenheit") {
        if (selectTo === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (selectTo === "kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        } else {
            result = inputTemp;
        }
    } else if (selectFrom === "kelvin") {
        if (selectTo === "celsius") {
            result = inputTemp - 273.15;
        } else if (selectTo === "fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        } else {
            result = inputTemp;
        }
    }

    document.getElementById("result").innerText = result.toFixed(2);
}

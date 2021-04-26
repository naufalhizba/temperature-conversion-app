const inputTemperature = document.querySelector(".input_temperature");
const outputTemperature = document.querySelector(".output_temperature");
const iTemperature = document.querySelectorAll(".initial_temperature");
const fTemperature = document.querySelectorAll(".final_temperature");
const btnCalculate = document.querySelector(".btn_calculate");

let initialTemperature = "";
let finalTemperature = "";

iTemperature[0].addEventListener("click", function (e) {
  initialTemperature = e.target.value;
  updateInputTemperatureDisplay();
});

fTemperature[0].addEventListener("click", function (e) {
  finalTemperature = e.target.value;
  updateOutputTemperatureDisplay();
});

function updateInputTemperatureDisplay() {
  const label1 = document.querySelector("label.temperature1");

  if (initialTemperature === "celcius") {
    label1.innerHTML = "<sup>o</sup>C";
  } else if (initialTemperature === "fahrenheit") {
    label1.innerHTML = "<sup>o</sup>F";
  } else if (initialTemperature === "kelvin") {
    label1.innerHTML = "<sup>o</sup>K";
  } else if (initialTemperature === "rankine") {
    label1.innerHTML = "<sup>o</sup>R";
  } else {
    label1.innerHTML = "";
  }
}

function updateOutputTemperatureDisplay() {
  const label2 = document.querySelector("label.temperature2");

  if (finalTemperature === "celcius") {
    label2.innerHTML = "<sup>o</sup>C";
  } else if (finalTemperature === "fahrenheit") {
    label2.innerHTML = "<sup>o</sup>F";
  } else if (finalTemperature === "kelvin") {
    label2.innerHTML = "<sup>o</sup>K";
  } else if (finalTemperature === "rankine") {
    label2.innerHTML = "<sup>o</sup>R";
  } else {
    label2.innerHTML = "";
  }
}

btnCalculate.addEventListener("click", calculate);

function calculate() {
  if (initialTemperature === "celcius") {
    if (finalTemperature === "celcius") {
      outputTemperature.value = inputTemperature.value;
    } else if (finalTemperature === "fahrenheit") {
      outputTemperature.value = inputTemperature.value * (9 / 5) + 32;
    } else if (finalTemperature === "kelvin") {
      outputTemperature.value = parseFloat(inputTemperature.value) + 273.15;
    } else if (finalTemperature === "rankine") {
      outputTemperature.value = inputTemperature.value * (9 / 5) + 491.67;
    }
  }

  if (initialTemperature === "fahrenheit") {
    if (finalTemperature === "celcius") {
      outputTemperature.value = (inputTemperature.value - 32) * (5 / 9);
    } else if (finalTemperature === "fahrenheit") {
      outputTemperature.value = inputTemperature.value;
    } else if (finalTemperature === "kelvin") {
      outputTemperature.value =
        (parseFloat(inputTemperature.value) + 459.67) * (5 / 9);
    } else if (finalTemperature === "rankine") {
      outputTemperature.value = parseFloat(inputTemperature.value) + 459.67;
    }
  }

  if (initialTemperature === "kelvin") {
    if (finalTemperature === "celcius") {
      outputTemperature.value = inputTemperature.value - 273.15;
    } else if (finalTemperature === "fahrenheit") {
      outputTemperature.value = (inputTemperature.value * 9) / 5 - 459.67;
    } else if (finalTemperature === "kelvin") {
      outputTemperature.value = inputTemperature.value;
    } else if (finalTemperature === "rankine") {
      outputTemperature.value = (inputTemperature.value * 9) / 5;
    }
  }

  if (initialTemperature === "rankine") {
    if (finalTemperature === "celcius") {
      outputTemperature.value =
        ((parseFloat(inputTemperature.value) - 491.67) * 5) / 9;
    } else if (finalTemperature === "fahrenheit") {
      outputTemperature.value = inputTemperature.value - 459.67;
    } else if (finalTemperature === "kelvin") {
      outputTemperature.value = (inputTemperature.value * 5) / 9;
    } else if (finalTemperature === "rankine") {
      outputTemperature.value = inputTemperature.value;
    }
  }
}

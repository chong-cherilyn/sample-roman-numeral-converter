const input = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");
const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

function numberConverter() {

  if (!input.value) {
    // Display an error message if the input is not a number
    output.innerText = "Please enter a valid number";
    output.removeAttribute("hidden");
  }
  else if (input.value <= 0) {
    // Display an error message if the input is zero
    output.innerText = "Please enter a number greater than or equal to 1";
    output.removeAttribute("hidden");
  }
  else if (input.value >= 4000) {
    // Display an error message if the input is 4000 upward
    output.innerText = "Please enter a number less than or equal to 3999";
    output.removeAttribute("hidden");
  }
  else {
    // Convert the valid input to roman numerals

    function oneDigitConverter(rawValue) {
      if (rawValue == 9) {
        output.innerText = romanNumerals[0].padEnd(2, romanNumerals[2]);
        output.removeAttribute("hidden");
      } else if (rawValue == 8) {
        output.innerText = romanNumerals[1].padEnd(4, romanNumerals[0]);
        output.removeAttribute("hidden");
      } else if (rawValue == 7) {
        output.innerText = romanNumerals[1].padEnd(3, romanNumerals[0]);
        output.removeAttribute("hidden");
      } else if (rawValue == 6) {
        output.innerText = romanNumerals[1].padEnd(2, romanNumerals[0]);
        output.removeAttribute("hidden");
      } else if (rawValue == 5) {
        output.innerText = romanNumerals[1];
        output.removeAttribute("hidden");
      } else if (rawValue == 4) {
        output.innerText = romanNumerals[0].padEnd(2, romanNumerals[1]);
        output.removeAttribute("hidden");
      } else {
        output.innerText = romanNumerals[0].repeat(rawValue);
        output.removeAttribute("hidden");
      }
    }

    function twoDigitConverter(values, convertedValues, repeat1) {

      if (values[0] == 90) {
        convertedValues.push(romanNumerals[2], romanNumerals[4]);
      } else if (values[0] == 80) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(3));
      } else if (values[0] == 70) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(2));
      } else if (values[0] == 60) {
        convertedValues.push(romanNumerals[3], romanNumerals[2]);
      } else if (values[0] == 50) {
        convertedValues.push(romanNumerals[3]);
      } else if (values[0] == 40) {
        convertedValues.push(romanNumerals[2], romanNumerals[3]);
      } else if (values[0] <= 30) {
        convertedValues.push(romanNumerals[2].repeat(repeat1));
      }

      if (values[1] == 9) {
        convertedValues.push(romanNumerals[0], romanNumerals[2]);
      } else if (values[1] == 8) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(3));
      } else if (values[1] == 7) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(2));
      } else if (values[1] == 6) {
        convertedValues.push(romanNumerals[1], romanNumerals[0]);
      } else if (values[1] == 5) {
        convertedValues.push(romanNumerals[1]);
      } else if (values[1] == 4) {
        convertedValues.push(romanNumerals[0], romanNumerals[1]);
      } else if (values[1] <= 3) {
        convertedValues.push(romanNumerals[0].repeat(values[1]));
      }
    }

    function threeDigitConverter(values, convertedValues, repeat1, repeat2) {

      if (values[0] == 900) {
        convertedValues.push(romanNumerals[4], romanNumerals[6]);
      } else if (values[0] == 800) {
        convertedValues.push(romanNumerals[5], romanNumerals[4].repeat(3));
      } else if (values[0] == 700) {
        convertedValues.push(romanNumerals[5], romanNumerals[4].repeat(2));
      } else if (values[0] == 600) {
        convertedValues.push(romanNumerals[5], romanNumerals[4]);
      } else if (values[0] == 500) {
        convertedValues.push(romanNumerals[5]);
      } else if (values[0] == 400) {
        convertedValues.push(romanNumerals[4], romanNumerals[5]);
      } else if (values[0] <= 300) {
        convertedValues.push(romanNumerals[4].repeat(repeat1));
      }

      if (values[1] == 90) {
        convertedValues.push(romanNumerals[2], romanNumerals[4]);
      } else if (values[1] == 80) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(3));
      } else if (values[1] == 70) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(2));
      } else if (values[1] == 60) {
        convertedValues.push(romanNumerals[3], romanNumerals[2]);
      } else if (values[1] == 50) {
        convertedValues.push(romanNumerals[3]);
      } else if (values[1] == 40) {
        convertedValues.push(romanNumerals[2], romanNumerals[3]);
      } else if (values[1] <= 30) {
        convertedValues.push(romanNumerals[2].repeat(repeat2));
      }

      if (values[2] == 9) {
        convertedValues.push(romanNumerals[0], romanNumerals[2]);
      } else if (values[2] == 8) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(3));
      } else if (values[2] == 7) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(2));
      } else if (values[2] == 6) {
        convertedValues.push(romanNumerals[1], romanNumerals[0]);
      } else if (values[2] == 5) {
        convertedValues.push(romanNumerals[1]);
      } else if (values[2] == 4) {
        convertedValues.push(romanNumerals[0], romanNumerals[1]);
      } else if (values[2] <= 3) {
        convertedValues.push(romanNumerals[0].repeat(values[2]));
      }
    }

    function fourDigitConverter(values, convertedValues, repeat1, repeat2, repeat3) {

      if (values[0]) {
        convertedValues.push(romanNumerals[6].repeat(repeat1));
      }

      if (values[1] == 900) {
        convertedValues.push(romanNumerals[4], romanNumerals[6]);
      } else if (values[1] == 800) {
        convertedValues.push(romanNumerals[5], romanNumerals[4].repeat(3));
      } else if (values[1] == 700) {
        convertedValues.push(romanNumerals[5], romanNumerals[4].repeat(2));
      } else if (values[1] == 600) {
        convertedValues.push(romanNumerals[5], romanNumerals[4]);
      } else if (values[1] == 500) {
        convertedValues.push(romanNumerals[5]);
      } else if (values[1] == 400) {
        convertedValues.push(romanNumerals[4], romanNumerals[5]);
      } else if (values[1] <= 300) {
        convertedValues.push(romanNumerals[4].repeat(repeat2));
      }

      if (values[2] == 90) {
        convertedValues.push(romanNumerals[2], romanNumerals[4]);
      } else if (values[2] == 80) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(3));
      } else if (values[2] == 70) {
        convertedValues.push(romanNumerals[3], romanNumerals[2].repeat(2));
      } else if (values[2] == 60) {
        convertedValues.push(romanNumerals[3], romanNumerals[2]);
      } else if (values[2] == 50) {
        convertedValues.push(romanNumerals[3]);
      } else if (values[2] == 40) {
        convertedValues.push(romanNumerals[2], romanNumerals[3]);
      } else if (values[2] <= 30) {
        convertedValues.push(romanNumerals[2].repeat(repeat3));
      }

      if (values[3] == 9) {
        convertedValues.push(romanNumerals[0], romanNumerals[2]);
      } else if (values[3] == 8) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(3));
      } else if (values[3] == 7) {
        convertedValues.push(romanNumerals[1], romanNumerals[0].repeat(2));
      } else if (values[3] == 6) {
        convertedValues.push(romanNumerals[1], romanNumerals[0]);
      } else if (values[3] == 5) {
        convertedValues.push(romanNumerals[1]);
      } else if (values[3] == 4) {
        convertedValues.push(romanNumerals[0], romanNumerals[1]);
      } else if (values[3] <= 3) {
        convertedValues.push(romanNumerals[0].repeat(values[3]));
      }
    }

    let rawValue = input.value;

    if (rawValue.length === 1) {
      // Convert single digit input

      oneDigitConverter(rawValue);

    } else if (rawValue.length > 1) {
      // Split input that is more than one digit long into an array

      let values = rawValue.split("");
      let convertedValues = [];

      if (rawValue.length === 2) {
        // Convert two digit input 

        let repeat1 = values[0];
        values.splice(0, 1, (repeat1.padEnd(2, "0")));
        twoDigitConverter(values, convertedValues, repeat1);

      } else if (rawValue.length === 3) {
        // Convert three digit input

        let repeat1 = values[0];
        let repeat2 = values[1];
        values.splice(0, 1, (repeat1.padEnd(3, "00")));
        values.splice(1, 1, (repeat2.padEnd(2, "0")));
        threeDigitConverter(values, convertedValues, repeat1, repeat2);

      } else {
        // Convert four digit input

        let repeat1 = values[0];
        let repeat2 = values[1];
        let repeat3 = values[2];
        values.splice(0, 1, (repeat1.padEnd(4, "000")));
        values.splice(1, 1, (repeat2.padEnd(3, "00")));
        values.splice(2, 1, (repeat3.padEnd(2, "0")));
        fourDigitConverter(values, convertedValues, repeat1, repeat2, repeat3);

      }

      let result = convertedValues.join("");
      output.innerText = result;
      output.removeAttribute("hidden");

    }
  }
}

button.addEventListener("click", numberConverter);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    numberConverter();
  }
});

addEventListener("input", () => {
  output.innerText = "";
  output.setAttribute("display", "hidden");
});
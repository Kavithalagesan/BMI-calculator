function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong><br>`;

  if (bmi < 18.5) {
    result.innerHTML += "You are underweight.";
  } else if (bmi < 25) {
    result.innerHTML += "You have a normal weight.";
  } else if (bmi < 30) {
    result.innerHTML += "You are overweight.";
  } else {
    result.innerHTML += "You are obese.";
  }
}

const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submit = document.querySelector(".submit");

const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

const errorElements = document.querySelectorAll(".error");

let isValid = false;

submit.addEventListener("click", calculateDate);

inputDay.addEventListener("input", handleInputValidation);
inputMonth.addEventListener("input", handleInputValidation);
inputYear.addEventListener("input", handleInputValidation);

function handleInputValidation(e) {
  const inputElement = e.target;
  const errorElement = inputElement.nextElementSibling;

  const maxDay = 31;
  const maxMonth = 12;
  const maxYear = 2023;

  let errorMessage = "";

  if (+inputElement.value > maxDay && inputElement === inputDay) {
    errorMessage = "Must Be A Valid Day";
  } else if (+inputElement.value === 0) {
    errorMessage = "This Field Is Required!";
  } else if (+inputElement.value > maxMonth && inputElement === inputMonth) {
    errorMessage = "Must Be A Valid Month";
  } else if (+inputElement.value > maxYear && inputElement === inputYear) {
    errorMessage = "Must Be In The Past";
  }

  errorElement.textContent = errorMessage;

  // Check if any error message exists
  const hasError = Array.from(errorElements).some(
    (error) => error.textContent !== ""
  );

  isValid = !hasError;
}

function calculateDate() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let dateOfBirth = new Date(birthday);
    let ageDifference = Date.now() - dateOfBirth.getTime();
    let ageDate = new Date(ageDifference);
    let ageDay = ageDate.getUTCDate();
    let ageMonth = ageDate.getUTCMonth();
    let ageYears = ageDate.getUTCFullYear() - 1970;

    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("Error: Please fill in the required fields correctly.");
  }
}

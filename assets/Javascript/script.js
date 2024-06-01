const startHourInput = document.getElementById("startHourInput");
const startMinuteInput = document.getElementById("startMinuteInput");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const resultContainer = document.getElementById("resultContainer");
const resultText = resultContainer.querySelector("h1");
const dateResult = document.getElementById("dateResult");
const dateInput = document.getElementById("dateInput");
const exceedDay = document.getElementById("exceedDay");

function storeTimeAndCalculate() {
  let startHour = parseInt(startHourInput.value) || 0;
  let startMinute = parseInt(startMinuteInput.value) || 0;
  let hoursToAdd = parseInt(hourInput.value) || 0;
  let minutesToAdd = parseInt(minuteInput.value) || 0;
  console.log(new Date(dateInput.value));
  let currentDate = dateInput.value ? new Date(dateInput.value) : new Date();
  currentDate.setHours(startHour);
  currentDate.setMinutes(startMinute);
  currentDate.setHours(currentDate.getHours() + hoursToAdd);
  currentDate.setMinutes(currentDate.getMinutes() + minutesToAdd);

  resultText.textContent = currentDate.toLocaleString();
}

function resetInputs() {
  startHourInput.value = "";
  startMinuteInput.value = "";
  hourInput.value = "";
  minuteInput.value = "";
  resultText.textContent = "00:00";
  dateInput.value = "";
  dateResult.textContent = "dd/mm/yyyy";
  exceedDay.style.display = "none";
}

// Add event listeners
document
  .getElementById("calculateBtn")
  .addEventListener("click", storeTimeAndCalculate);
document.getElementById("resetBtn").addEventListener("click", resetInputs);
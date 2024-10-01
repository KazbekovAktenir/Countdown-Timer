const items = document.querySelectorAll(".count_down_item > h4");
const countDownElement = document.querySelector(".count_down");
const startButton = document.getElementById("start-timer");
const dateInput = document.getElementById("countdown-date");

let countDownDate;

//функция обратного отсчета
function getCountdownTime() {
  //получить текущее время
  const now = new Date().getTime();

  //вычислить разницу во времени
  const distance = countDownDate - now;

  // 1с = 1000мс, 1м = 60с, 1ч = 60м, 1д = 24ч
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //подсчет дней, часов, минут и секунд
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  //вставить значения на страницу
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  //если время вышло
  if (distance < 0) {
    clearInterval(countdown);
    countDownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>";
  }
}

//функция, которая запускает таймер с новой датой
function startCountdown() {
  // Получаем введенное значение даты
  const userDate = dateInput.value;

  if (userDate) {
    //преобразуем введенную дату в миллисекунды
    countDownDate = new Date(userDate).getTime();

    //запускаем таймер с обновленной датой
    countdown = setInterval(getCountdownTime, 1000);

    //инициализация таймера с текущим временем
    getCountdownTime();
  } else {
    alert("Пожалуйста, выберите дату для отсчета.");
  }
}

//слушатель на кнопку для запуска обратного отсчета
startButton.addEventListener("click", startCountdown);

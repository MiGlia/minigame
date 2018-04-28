'use strict';
(function () {
  var table = document.querySelector('table');
  var timerBlock = document.querySelector('.timer__time');
  var rotateButton = document.querySelector('.control-block__button-rot');
  var showButton = document.querySelector('.control-block__button-show');
  var mainRezult = document.querySelector('.rezult__wrapper');
  var mainRezoltTime = document.querySelector('.rezult__text-time');
  var tableList = document.querySelectorAll('.table__conteiner');
  var mainTextPixel = document.querySelector('.rezult__text-pixel');
  var newArr = [];
  var timer;
  
  var time = {
    seconds: 0,
    minutes: 0
  };

  // Функция смотрит какой элемент был нажат и добавляет ему класс с цветом,
  // если класс есть - убирает  .
  function getClickConteiner(evt) {
    var target = evt.target;
    target.classList.toggle('conteiner__black');
  }

  //  Функция для таймера -
  function getTime() {
    time.seconds++;
    if (time.seconds >= 60) {
      time.seconds = 0;
      time.minutes++;
    }
    timerBlock.textContent = (time.minutes <= 9 ? '0' + time.minutes : time.minutes) + ':' + (time.seconds <= 9 ? '0' + time.seconds : time.seconds);
    startTimer();
  }

  // таймер
  function startTimer() {
    timer = setTimeout(getTime, 1000);
    return timer;
  }

  // Функция остановки таймера
  function stopTimer() {
    clearTimeout(timer);
  }

  // Функция поворачивает элемент на 90 градусов
  function rotateTable() {
    table.style.transform = table.style.transform + 'rotate(90deg)';
  }

  // Функция добавляет класс элементу 'rezult-show'
  function addClass(el) {
    el.classList.add('rezult-show');
  }


  showButton.addEventListener('click', function () {
    addClass(mainRezult);
    setPixelCount();
    stopTimer();
    setTimeCount();
  });

  // Функция добавляет количечтво нажатых пикселей в результат
  function setPixelCount() {
    tableList.forEach(function (item) {
      if (item.classList.contains('conteiner__black')) {
        newArr.push(item);
        mainTextPixel.textContent = 'Пикселей: ' + newArr.length;
      }
    });
  }

  // Функция добавляет время игры в результат
  function setTimeCount() {
    mainRezoltTime.textContent = 'Время: ' + timerBlock.textContent;
  }

  // обработчики
  table.addEventListener('click', getClickConteiner);
  rotateButton.addEventListener('click', rotateTable);
  table.addEventListener('click', function () {
    if (timerBlock.textContent === '00:00') {
      startTimer();
    }
  });
})();

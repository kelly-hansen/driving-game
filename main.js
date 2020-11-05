var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
};

var $car = document.querySelector('img');

function changeDirection(e) {
  if (e.code === 'ArrowUp') {
    data.direction = 'north';
  } else if (e.code === 'ArrowRight') {
    data.direction = 'east';
  } else if (e.code === 'ArrowDown') {
    data.direction = 'south';
  } else if (e.code === 'ArrowLeft') {
    data.direction = 'west';
  }
  $car.className = data.direction;
}

function carMovement() {
  data.location.x = data.location.x + 8;
  $car.setAttribute('style', 'left:' + (data.location.x) + 'px;');
}

var carMovingInterval;

function startCar() {
  clearInterval(carMovingInterval);
  carMovingInterval = setInterval(carMovement, 16);
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    startCar();
  } else {
    changeDirection(e);
  }
});

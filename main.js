var data = {
  direction: 3, // N = 1, NE = 2, E = 3, SE = 4, S = 5, SW = 6, W = 7, NW = 8
  degrees: 0,
  location: {
    x: 53,
    y: 45
  },
  moving: false
};

var $car = document.querySelector('img');

function changeDirection(e) {
  var newDirection;
  if (e.code === 'ArrowRight') {
    data.degrees += 45;
    newDirection = data.direction + 1;
  } else if (e.code === 'ArrowLeft') {
    data.degrees -= 45;
    newDirection = data.direction - 1;
  } else {
    return;
  }
  if (newDirection === 9) {
    data.direction = 1;
  } else if (newDirection === 0) {
    data.direction = 8;
  } else {
    data.direction = newDirection;
  }
  $car.setAttribute('style', 'left: ' + data.location.x + 'rem; top: ' + data.location.y + 'rem; transform: rotate(' + data.degrees + 'deg);');
}

function carMovement() {
  if (data.direction === 1) {
    data.location.y = data.location.y - 0.8;
  } else if (data.direction === 2) {
    data.location.x = data.location.x + 0.4;
    data.location.y = data.location.y - 0.4;
  } else if (data.direction === 3) {
    data.location.x = data.location.x + 0.8;
  } else if (data.direction === 4) {
    data.location.x = data.location.x + 0.4;
    data.location.y = data.location.y + 0.4;
  } else if (data.direction === 5) {
    data.location.y = data.location.y + 0.8;
  } else if (data.direction === 6) {
    data.location.x = data.location.x - 0.4;
    data.location.y = data.location.y + 0.4;
  } else if (data.direction === 7) {
    data.location.x = data.location.x - 0.8;
  } else if (data.direction === 8) {
    data.location.x = data.location.x - 0.4;
    data.location.y = data.location.y - 0.4;
  }
  $car.setAttribute('style', 'left: ' + data.location.x + 'rem; top: ' + data.location.y + 'rem; transform: rotate(' + data.degrees + 'deg);');
}

var carMovingInterval;

function startStopCar() {
  clearInterval(carMovingInterval);
  if (!data.moving) {
    carMovingInterval = setInterval(carMovement, 16);
    data.moving = true;
  } else {
    data.moving = false;
  }
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    startStopCar();
  } else {
    changeDirection(e);
  }
});

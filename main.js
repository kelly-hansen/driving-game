var data = {
  direction: 2, // north = 1, east = 2, south = 3, west = 4
  degrees: 0,
  location: {
    x: 0,
    y: 0
  },
  moving: false
};

var $car = document.querySelector('img');

function changeDirection(e) {
  var newDirection;
  if (e.code === 'ArrowRight') {
    data.degrees += 90;
    newDirection = data.direction + 1;
  } else if (e.code === 'ArrowLeft') {
    data.degrees -= 90;
    newDirection = data.direction - 1;
  } else {
    return;
  }
  if (newDirection === 5) {
    data.direction = 1;
  } else if (newDirection === 0) {
    data.direction = 4;
  } else {
    data.direction = newDirection;
  }
  $car.setAttribute('style', 'left: ' + data.location.x + 'px; top: ' + data.location.y + 'px; transform: rotate(' + data.degrees + 'deg);');
}

function carMovement() {
  if (data.direction === 1) {
    data.location.y = data.location.y - 8;
  } else if (data.direction === 2) {
    data.location.x = data.location.x + 8;
  } else if (data.direction === 3) {
    data.location.y = data.location.y + 8;
  } else if (data.direction === 4) {
    data.location.x = data.location.x - 8;
  }
  $car.setAttribute('style', 'left: ' + data.location.x + 'px; top: ' + data.location.y + 'px; transform: rotate(' + data.degrees + 'deg);');
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

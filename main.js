var data = {
  direction: 'east'
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') {
    $car.className = 'north';
    data.direction = 'north';
  } else if (e.code === 'ArrowRight') {
    $car.className = 'east';
    data.direction = 'east';
  } else if (e.code === 'ArrowDown') {
    $car.className = 'south';
    data.direction = 'south';
  } else if (e.code === 'ArrowLeft') {
    $car.className = 'west';
    data.direction = 'west';
  }
});

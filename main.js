var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  }
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (e) {
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
});

var $car = document.querySelector('img');

document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') {
    $car.className = 'up';
  } else if (e.code === 'ArrowRight') {
    $car.className = 'right';
  } else if (e.code === 'ArrowDown') {
    $car.className = 'down';
  } else if (e.code === 'ArrowLeft') {
    $car.className = 'left';
  }
});

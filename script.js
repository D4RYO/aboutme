const player = document.getElementById('player');
const room = document.getElementById('room');
const step = 10;

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const playerRect = player.getBoundingClientRect();
  const roomRect = room.getBoundingClientRect();

  switch (key) {
    case 'ArrowUp':
      if (playerRect.top > roomRect.top) {
        player.style.top = `${player.offsetTop - step}px`;
      }
      break;
    case 'ArrowDown':
      if (playerRect.bottom < roomRect.bottom) {
        player.style.top = `${player.offsetTop + step}px`;
      }
      break;
    case 'ArrowLeft':
      if (playerRect.left > roomRect.left) {
        player.style.left = `${player.offsetLeft - step}px`;
      }
      break;
    case 'ArrowRight':
      if (playerRect.right < roomRect.right) {
        player.style.left = `${player.offsetLeft + step}px`;
      }
      break;
  }
});
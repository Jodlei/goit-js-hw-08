import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  if (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }
};

player.on('timeupdate', throttle(onPlay, 1000));

const parseObj = JSON.parse(localStorage.getItem('videoplayer-current-time'));
let time = 0;
if (parseObj) {
  time = parseObj.seconds;
}

player
  .setCurrentTime(time)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

// це все що нижче можна прибрати?

// .then(function (seconds) {})
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       break;
//     default:
//       break;
//   }
// });

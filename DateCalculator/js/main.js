import "./pages/dateCalc.js";
import "./pages/timer.js";
import "../../src/style.css";
import pictureUrl from '../../src/img/timer.png';
require('../../sound.mp3');

const image = document.createElement('img');
image.src = pictureUrl;
document.body.appendChild(image);
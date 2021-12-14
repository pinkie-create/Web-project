import {
    printTimer
} from "./print.js";

import {
    Howl
} from "howler";

let timerID;

function setTimer(time) {
    timerID = setInterval(() => {
        if (time === 0) {
            clearInterval(timerID)
            const sound = new Howl({
                src: ['../../sound.mp3']
            });

            sound.play();
        }

        let seconds = Math.trunc(time % 60)
        let minutes = Math.trunc(time / 60 % 60)
        let hours = Math.trunc(time / 3600)

        printTimer({
            seconds,
            minutes,
            hours
        }, 'outputTimer')

        time--
    }, 1000);

}

function stopTimer() {
    clearInterval(timerID)
}

export {
    setTimer,
    stopTimer
}
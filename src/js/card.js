import sound1 from "../media/audio/1.mp3"
import sound2 from "../media/audio/2.mp3"
import sound3 from "../media/audio/3.mp3"
import image1 from "../media/images/1.jpg"
import image2 from "../media/images/2.jpg"
import image3 from "../media/images/3.jpg"
import gif from "../media/images/4.gif"
import video1 from "../../src/media/video/1.mp4"
import video2 from "../../src/media/video/2.mp4"

const gallery = [{
        res: image1,
        title: "Мельница у реки",
        type: "image"
    },
    {
        res: image2,
        title: "Горы осенью",
        type: "image"
    },
    {
        res: image3,
        title: "Деревня летом",
        type: "image"
    },
    {
        res: gif,
        title: "Анимированный котик",
        type: "gif"
    },
    {
        res: sound1,
        title: "Птички летом",
        type: "sound"
    }, {
        res: sound2,
        title: "Ручеек в ущелье",
        type: "sound"
    },
    {
        res: sound3,
        title: "Закат в лесу",
        type: "sound"
    },
    {
        res: video1,
        title: "Never Gonna Give You Up",
        type: "video"
    },
    {
        res: video2,
        title: "Морской прибой",
        type: "video"
    }
]

for (let i = 0; i < gallery.length; i++) {
    if (gallery[i].type === 'image') {
        const img = new Image()
        img.src = gallery[i].res

        document.querySelector('.galleryBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')

        document.querySelectorAll('.card')[i].appendChild(img)
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<h3>' + gallery[i].title + '</h3>')

    } else if (gallery[i].type === 'gif') {
        document.querySelector('.galleryBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<img src="' + gallery[i].res + '"alt="gif">')

        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<h3>' + gallery[i].title + '</h3>')
    } else if (gallery[i].type === 'sound') {
        // const sound = new Audio(gallery[i].res)
        // sound.controls = true

        document.querySelector('.galleryBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')

        document.querySelectorAll('.card')[i].insertAdjacentHTML("afterbegin", '<div class="audio_card"><audio preload src="' + gallery[i].res + '" controls></audio><h3>' + gallery[i].title + '</h3></div>')
    } else if (gallery[i].type === 'video') {
        document.querySelector('.galleryBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<video controls class="video" src="' + gallery[i].res + '"></video>')

        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<h3>' + gallery[i].title + '</h3>')
    }
}
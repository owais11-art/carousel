import imgOne from '../assets/img-1.jpg'
import imgTwo from '../assets/img-2.jpg'
import imgThree from '../assets/img-3.jpg'
import imgFour from '../assets/img-4.jpg'
import imgFive from '../assets/img-5.jpg'
import imgSix from '../assets/img-6.jpg'
import imgSeven from '../assets/img-7.jpg'
import imgEight from '../assets/img-8.jpg'
import imgNine from '../assets/img-9.jpg'
import imgTen from '../assets/img-10.jpg'
import imgEleven from '../assets/img-11.jpg'
export const data = [
    {
        img: imgOne,
        alt: 'image-1',
        id: 1
    },
    {
        img: imgTwo,
        alt: 'image-2',
        id: 2
    },
    {
        img: imgThree,
        alt: 'image-3',
        id: 3
    },
    {
        img: imgFour,
        alt: 'image-4',
        id: 4
    },
    {
        img: imgFive,
        alt: 'image-5',
        id: 5
    },
    {
        img: imgSix,
        alt: 'image-6',
        id: 6
    },
    {
        img: imgSeven,
        alt: 'image-7',
        id: 7
    },
    {
        img: imgEight,
        alt: 'image-8',
        id: 8
    },
    {
        img: imgNine,
        alt: 'image-9',
        id: 9
    },
    {
        img: imgTen,
        alt: 'image-10',
        id: 10
    },
    {
        img: imgEleven,
        alt: 'image-11',
        id: 11
    }
].map((item, index) => index ? ({...item, isVisible: false}) : ({...item, isVisible: true}))
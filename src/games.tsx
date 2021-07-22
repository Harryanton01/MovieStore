//sample image imports
import playstation from './images/playstation.jpg';
import templerun from './images/templerun.jpg';
import pokemon from './images/pokemon.jpg';
import chickenrings from './images/chickenrings.jpg';
import ragequitters from './images/ragequitters.jpg';
import farmslam from './images/farmslam.jpg';

//sample games
const games = [
    {
        id:0, 
        amount_usd:21.50, 
        rating: 5, 
        description:{
            release_date: 'March 27, 2020',
            title: 'Crush Saga iOS'
        },
        img: templerun,
        quantity: 1,
        tags: ['Game', 'Music', 'Action']
    }, 
    {
        id:1, 
        amount_usd:14.85, 
        rating:5,
        description:{
            release_date: 'May 7, 2020',
            title: 'Stranger Game Android'
        },
        img: pokemon,
        quantity: 1,
        tags: ['Game', 'Music']
    },
    {
        id:2, 
        amount_usd:12.00, 
        rating: 4, 
        description:{
            release_date: 'September 2, 2019',
            title: 'Best Game'
        },
        img: farmslam,
        quantity: 1,
        tags: ['Game', 'Action']
    }, 
    {
        id:3, 
        amount_usd:8.00, 
        rating: 3, 
        description:{
            release_date: 'March 27, 2029',
            title: 'Super Balls Mobile'
        },
        img: ragequitters,
        quantity: 1,
        tags: ['Game', 'Music', 'Action']
    }, 
    {
        id:4, 
        amount_usd:4.60, 
        rating: 3, 
        description:{
            release_date: 'August 7, 2019',
            title: 'Dogs Play'
        },
        img: chickenrings,
        quantity: 1,
        tags: ['Game']
    }, 
    {
        id:5, 
        amount_usd:2.05, 
        rating: 2, 
        description:{
            release_date: 'June 14, 2018',
            title: 'Puzzles Game'
        },
        img: playstation,
        quantity: 1,
        tags: ['Game']
    }, 
]

export default games;
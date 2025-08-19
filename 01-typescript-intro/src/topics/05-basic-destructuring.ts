interface AudioPlayer {
    audioVolume:number;
    songDuration: number;
    song:string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//desestructuracion consiste en tomar ciertas piezas que me interesan

//es incomodo 
/* console.log('Song: ', audioPlayer.song); */
/* console.log('Duration: ', audioPlayer.songDuration); */


const song = 'New Song';

//se puede hacer de esta forma la desestructuracion del objeto interno,

//const {
//    song:anotherSong, 
//    songDuration:duration,
//    details: {
//        author
//    }
//} = audioPlayer;

//o se puede hacer aparte
const {
    song:anotherSong, 
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details;

/* console.log('Song:', song);
console.log('Song:', duration);
console.log('Song:', anotherSong);

console.log(author); */


const dbz:string[]=['Goku', 'Vegeta', 'Trunk'];
const trunks =  dbz[3] || 'No hay personaje';

console.error('Personaje 3:', trunks);






export {};
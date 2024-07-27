interface AudioPlayer {
    volume: number;
    duration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const cacharrin: AudioPlayer ={
    volume: 90,
    duration: 36,
    song: "Mess",
    details:{
        author: 'Ed Sheeran',
        year: 2015
    }
}

console.log('Song: ',cacharrin.song );
console.log('Author: ',cacharrin.details.author);

const song = 'Cancioncilla';

export{}
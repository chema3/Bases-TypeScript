
interface AudioPlayer {
    audioVolume :number;
    songDuration :number;
    song : string;
    details : Details;
}

interface Details {
    author :string;
    year :number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Chess",
    details: {
        author: "Doble P",
        year: 2023
    }
}

//const {details} = audioPlayer;
//const {author} = details;
//console.log(author);




export {};
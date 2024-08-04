"use strict";
let lirikLagu = {
    status: true,
    data: {
        artist: "Avenged Sevenfold",
        songTitle: "Little Piece of Heaven",
        songLyrics: "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
        songLyricsArr: [
            "Before the story begins, is it such a sin",
            "For me to take what's mine, until the end of time?",
            "We were more than friends, before the story ends",
            "And I will take what's mine, create what God would never design",
            "Our love had been so strong for far too long",
            // (lirik selanjutnya)
        ]
    }
};
//SOAL2A
let ubahData = Object.assign(Object.assign({}, lirikLagu.data), { artist: "Salwa Eka Afiani", songTitle: "UI UX Designer" });
console.log(ubahData);
//SOAL2B
let ambilData = lirikLagu.data.songLyricsArr[1];
console.log(ambilData);

```
let lirikLagu: {
    status: boolean;
    data: {
        artist: string;
        songTitle: string;
        songLyrics: string;
        songLyricsArr: string[];
    };
} = {
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
```
**Penjelasan**
- `lirikLagu` : variabel bertipe objek yang memiliki dua properti: status dan data. 
- `status` : tipe boolean yang menunjukkan apakah data lirik lagu valid atau tidak. 
- `data` : objek yang memuat informasi mengenai lagu, dengan properti: 
  - `artist` (string): Nama artis. 
  - `songTitle` (string): Judul lagu. 
  - `songLyrics` (string): Lirik lagu dalam format string. 
  - `songLyricsArr` (array of string): Lirik lagu dalam bentuk array, setiap elemen adalah baris lirik.
 
# SOAL 2A
```
let ubahData: { artist: string; songTitle: string } = {
    ...lirikLagu.data,
    artist: "Salwa Eka Afiani",
    songTitle: "UI UX Designer"
};

console.log(ubahData);
```
**Penjelasan**
- `ubahData`: variabel bertipe objek baru yang dihasilkan dengan menggunakan spread operator (...).
- Spread operator digunakan untuk menyalin semua properti dari objek `lirikLagu.data` ke dalam objek baru `ubahData`.
- Setelah menyalin semua properti, properti `artist` dan `songTitle` diubah nilainya sesuai dengan yang ditentukan:
  - `artist` diubah menjadi "Salwa Eka Afiani".
  - `songTitle` diubah menjadi "UI UX Designer".
- `console.log(ubahData)`: fungsi yang digunakan untuk menampilkan objek `ubahData` ke konsol, sehingga kita bisa melihat hasil perubahan yang telah dibuat.

# SOAL 2B
```
let ambilData: string = lirikLagu.data.songLyricsArr[1];
    console.log(ambilData);
```
**Penjelasan**
- `ambilData` : variabel yang menyimpan baris lirik lagu yang diambil dari array `songLyricsArr`.
- `lirikLagu.data.songLyricsArr[1]`:  digunakan untuk mengambil elemen pada indeks ke-1 dari array tersebut. Karena indeks dimulai dari 0, maka elemen yang diambil adalah baris kedua dari lirik lagu. 
- `console.log(ambilData);`: fungsi yang akan mencetak baris kedua dari lirik lagu ke konsol.



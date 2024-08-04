```
function tentukanGrade(rataRata: number): string {
    if (rataRata >= 90) return 'A';
    if (rataRata >= 80) return 'B';
    if (rataRata >= 70) return 'C';
    if (rataRata >= 60) return 'D';
    return 'E';
  }
```
**Penjelasan**
- Fungsi ini menerima parameter `rataRata` bertipe number.
- Fungsi ini mengembalikan sebuah string yang merupakan grade (nilai huruf) berdasarkan rentang nilai:
  - A untuk nilai rata-rata 90 atau lebih.
  - B untuk nilai rata-rata antara 80 hingga 89.
  - C untuk nilai rata-rata antara 70 hingga 79.
  - D untuk nilai rata-rata antara 60 hingga 69.
  - E untuk nilai rata-rata di bawah 60.
```
function hitungRataRatadanGrade(
    webProgramming: number,
    computerProgramming: number,
    statistics: number,
    databaseSystems: number
  ): string {
    if (
      [webProgramming, computerProgramming, statistics, databaseSystems].some(
        value => value < 0 || value > 100
      )
    ) {
      return "Semua nilai harus diisi dan berada dalam rentang 0-100.";
    }
    const rataRata = (webProgramming + computerProgramming + statistics + databaseSystems) / 4;
    const grade = tentukanGrade(rataRata);
    return `Rata-rata nilai: ${rataRata.toFixed(2)}, Grade: ${grade}`;
}
```
**Penjelasan**
- Fungsi ini menerima empat parameter, yaitu nilai untuk `webProgramming`, `computerProgramming`, `statistics`, dan `databaseSystems`, semuanya berupa angka (number).
- Pertama, fungsi ini memeriksa apakah semua nilai berada dalam rentang 0 hingga 100 menggunakan metode `some` pada array yang berisi keempat nilai tersebut. Jika ada nilai yang kurang dari 0 atau lebih dari 100, fungsi akan mengembalikan pesan kesalahan.
- Jika semua nilai valid, fungsi ini menghitung rata-rata dari keempat nilai tersebut.
- Kemudian, fungsi ini memanggil `tentukanGrade` dengan `rataRata` sebagai argumen untuk mendapatkan grade yang sesuai.
    - return `Rata-rata nilai: ${rataRata.toFixed(2)}, Grade: ${grade};` fungsi ini mengembalikan string yang menggabungkan informasi rata-rata nilai dan grade  yang diperoleh.
        - rataRata.toFixed(2) adalah metode yang digunakan untuk membatasi jumlah angka desimal pada variabel rataRata menjadi dua tempat desimal.
            - Misalnya, jika rataRata adalah 85.2534, maka `rataRata.toFixed(2)` akan menghasilkan '85.25'.

**Contoh Penggunaan**
```
const result = hitungRataRatadanGrade(85, 90, 78, 88);
  console.log(result);   
```
**Penjelasan**
- Kode ini untuk memanggil fungsi `hitungRataRatadanGrade` dengan nilai 85, 90, 78, dan 88 untuk webProgramming, computerProgramming, statistics, dan databaseSystems masing-masing.
- Hasilnya disimpan dalam variabel result dan kemudian dicetak ke konsol. Output akan menunjukkan rata-rata nilai dan grade yang sesuai.


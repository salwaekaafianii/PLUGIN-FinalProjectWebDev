function tentukanGrade(rataRata: number): string {
    if (rataRata >= 90) return 'A';
    if (rataRata >= 80) return 'B';
    if (rataRata >= 70) return 'C';
    if (rataRata >= 60) return 'D';
    return 'E';
  }
  
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
  
  // Contoh penggunaan
  const result = hitungRataRatadanGrade(85, 90, 78, 88);
  console.log(result);
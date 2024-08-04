"use strict";
function getGrade(average) {
    if (average >= 90)
        return 'A';
    if (average >= 80)
        return 'B';
    if (average >= 70)
        return 'C';
    if (average >= 60)
        return 'D';
    return 'E';
}
function calculateAverageGrade(webProgramming, computerProgramming, statistics, databaseSystems) {
    if ([webProgramming, computerProgramming, statistics, databaseSystems].some(value => value < 0 || value > 100)) {
        return "Semua nilai harus diisi dan berada dalam rentang 0-100.";
    }
    const average = (webProgramming + computerProgramming + statistics + databaseSystems) / 4;
    const grade = getGrade(average);
    return `Rata-rata nilai: ${average.toFixed(2)}, Grade: ${grade}`;
}
// Contoh penggunaan
const result = calculateAverageGrade(85, 90, 78, 88);
console.log(result);

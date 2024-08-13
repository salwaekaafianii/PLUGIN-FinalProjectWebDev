function printTriangle(height: number): void {
    for (let i = 1; i < height; i++) {
        let row = ' '.repeat(height - i)+ '*'.repeat(i);
        console.log(row);
    }
}

printTriangle(7);
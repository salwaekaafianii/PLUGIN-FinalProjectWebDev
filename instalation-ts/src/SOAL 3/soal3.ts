function printTriangle(height: number): void {
    for (let i = 0; i < height; i++) {
        console.log('*'.repeat(i + 1));
    }
}

printTriangle(7);
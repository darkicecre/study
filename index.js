function parseBinaryString(n) {
    if (n == 0 || n == 1) {
        return String(n);
    }
    let odd = n % 2;
    return parseBinaryString((n - odd) / 2) + String(odd);
}

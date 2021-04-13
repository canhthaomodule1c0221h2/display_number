function ktsnt(n) {
    for (let i = 2; i < n; i++)
        if (n % i == 0) {
            return false;
        }
    return true;
}
let j = 2;
let count = 0;
while (count < 20) {
    if (ktsnt(j)) {
        count++;
        document.write(j + "<br>");
    }
    j++;
}
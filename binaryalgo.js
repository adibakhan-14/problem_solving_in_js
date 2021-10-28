const number = [1, 3, 4, 5, 7, 9, 10, 12, 12, 14, 16, 20, 23, 24, 27, 32, 35, 45];

var left = 0;
var right = (number.length);
while (left <= right) {
    const mid = (left + right) / 2;

    if (number[mid] === 7) {
        console.log(mid);
    }
    if (number[mid] < 7) {
        left = mid + 1;
        console.log(left);
    } else {
        right = mid - 1;
        console.log(right);
    }
}
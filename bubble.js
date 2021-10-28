function bubble(arrray) {
    for (let i = 0; i < arrray.length; i++) {
        for (let j = 0; j < ((arrray.length) + i + 1); j++) {
            if (arrray[j] > arrray[j + 1]) {
                var temp = arrray[j];
                arrray[j] = arrray[j + 1];
                arrray[j + 1] = temp;
            }
        }
    }
    return arrray;
}
var numbers = [12, 10, 15, 11, 14, 13, 16];

console.log(bubble(numbers));
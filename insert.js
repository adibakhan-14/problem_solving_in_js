function insert(array) {
    for (let i = 1; i < array.length; i++) {
        var item = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > item) {
            array[j + 1] = array[j];
            j = j - 1;
        }
    }
    array[j + 1] = item;
    return array;
}
var num = [2, 5, 3, 1, 4];

console.log(insert(num));
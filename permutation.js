function permutation(arrray1, array2) {
    var a = arrray1.split('').sort().join('');
    var b = array2.split('').sort().join('');

    if (a == b) {
        return true;
    } else {
        return false;
    }

}
var word = "dasa"
var word2 = "asda"
if (permutation(word, word2) == true) {
    console.log("they are permutation of each other");
} else {
    console.log("Not permutation");
}
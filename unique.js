function unique(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] != array[j]) {
                return true;
            } else {
                return false;
            }
        }

    }
    return array;
}

var string = "GeeksforGeeks";
if (unique(string) == true) {
    console.log("input was unique");
} else {
    console.log("not unique");
}
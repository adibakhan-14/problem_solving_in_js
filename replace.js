function replace(string, target, settle) {
    for (let i = 0; i < string.length; i++) {


        string = string.replace(target, settle);


    }
    return string;



}







var sentence = "Hi! My name is Adiba";
console.log(replace(sentence, ' ', '%20'));
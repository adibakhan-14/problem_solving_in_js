var urlObject = ["kmZW50cnkuMTk1NDA1MDMwND1hZGliYXN1bWFpeWEuMjdAZ21h", "dW1haXlhLjI3JTQwZ21haWwuY29tLWRiTnl4eldHTzZENE40UW", "lwUUxTZS1nQUx1eFBKanJPVEZ2MnpCX0FSQVFBbEtGRHlYdTVS", "b2xHcGxablNvLUw2akFBL3ZpZXdmb3JtP3VzcD1wcF91cmwmZW", "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQU", "50cnkuMTAxMzkwOTE1PVBHRnpsOUcxcFFLMTF6S3ctYWRpYmFz", "aWwuY29t"];

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

// Used like so

var changedUrl = shuffle(urlObject);
console.log(urlObject);


var urlString = changedUrl.join("");
console.log(urlString);

function decode_base64(s) {
    var e = {},
        i, k, v = [],
        r = '',
        w = String.fromCharCode;
    var n = [
        [65, 91],
        [97, 123],
        [48, 58],
        [43, 44],
        [47, 48]
    ];

    for (z in n) {
        for (i = n[z][0]; i < n[z][1]; i++) {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i += 72) {
        var b = 0,
            c, x, l = 0,
            o = s.substring(i, i + 72);
        for (x = 0; x < o.length; x++) {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                r += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return r;
}
var decodStr = decode_base64(urlString);


// var regex = new RegExp(expression);



var urlCanB = decodStr.replace("[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]", "");
console.log(urlCanB);
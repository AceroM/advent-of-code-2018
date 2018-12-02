const fs = require('fs');

var count = (word) => {
    var twos = 0, threes = 0;
    var d = {};
    for (let i of word) 
        d[i] ? d[i]++ : d[i] = 1
    for(let i in d) {
        if (d[i] == 2) twos++;
        if (d[i] == 3) threes++;
    }
    return [twos, threes]
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const difference = (a, b) => {
    let s = ''
    for(let i = 0; i < a.length; i++) {
        if (a[i] == b[i])
            s += a[i]
        else
            s += '|'
    }
    return s
};

const part1 = (inp) => {
    inp = inp.map(m => count(m))
    inp = inp.map(m => {
        if (m[0] > 0 && m[1] > 0) return 23
        if (m[0] > 0) return 2
        if (m[1] > 0) return 3
    })
    tw = countOccurrences(inp, 2) + countOccurrences(inp, 23)
    th = countOccurrences(inp, 3) + countOccurrences(inp, 23)
    return tw * th
}

const part2 = (inp) => {
    for (let i of inp) {
        for (let j of inp) {
            let s = difference(i, j)
            if (countOccurrences(s.split(''), '|') == 1)
                return s.replace('|', '')
        }
    }
    return false
}

fs.readFile('day2.txt', "utf8", (err, data) => {
    data = data.split('\n');
    // console.log(part1(data))
    console.log(part2(data))
    // console.log(count('cvgoxwqubahaefmslkjdrptzyi'))
})
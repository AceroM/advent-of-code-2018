const fs = require('fs');
var data = fs.readFileSync('day5.txt').toString().split('')
// let data = 'dabAcCaCBAcCcaDA'.split('')

var d = {};

function detect(data) {
    for (let i = 0; i < data.length-1; i++) {
        let a = data[i].charCodeAt(0);
        let b = data[i+1].charCodeAt(0);
        if(Math.abs(b - a) == 32) {
            data.splice(i, 2)
            return data
        }
    }
    return [false, data]
    // data = data.join('')
    // return data
}

function part1(inp) {
    while (inp[0] != false) {
        inp = detect(inp);
    }
    return inp[1].join('').length
}

function part2(inp) {
    let abc = ''
    for (let i of inp) {
        if (abc.indexOf(i.toLowerCase()) == -1) 
            abc += i
    }
    d = {}
    // var abc = 'abcdefghijklmnopqrstuvwxyz';
    for (let i of abc) {
        let copy = inp.filter(m => m != i)
        copy = copy.filter(m => m != i.toUpperCase())
        d[i] = part1(copy);
    }
    return Math.min(...Object.values(d))
    return d
}

console.log(part2(data))
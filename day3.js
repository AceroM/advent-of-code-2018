const fs = require('fs');
const data = fs.readFileSync('day3.txt').toString().split('\n');
// let data = `#1 @ 1,3: 4x4
// #2 @ 3,1: 4x4
// #3 @ 5,5: 2x2`.split('\n');

let editBoard = (board, num, left, top, xy) => {
    for (let i = 0; i < left + xy[0]; i++) {
        for (let j = 0; j < top + xy[1]; j++) {
            if (i > left-1 && j > top-1) {
                board[i][j] += num + ':'
            }
        }
    }
    return board
}

let makeBoard = (board, x, y) => {
    for (let i = 0; i < x; i++) {
        arr = []
        for (let j = 0; j < y; j++) {
            arr.push('.')
        }
        board.push(arr)
    }
    return board
}

// c = editBoard(b, 1, 1, 1, [2,2])
// set up 1000x1000 board 
var b = makeBoard([], 1000, 1000)

for (let i of data) {
    let a = i.split(/:|@/)
    a = a.map(m => m.trim());
    num = parseInt(a[0].split('#')[1])
    left = parseInt(a[1].split(',')[0])
    top = parseInt(a[1].split(',')[1])
    xy = [parseInt(a[2].split('x')[0]), parseInt(a[2].split('x')[1])]
    b = editBoard(b, num, left, top, xy)
}

let counter = 0 
arr = []
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        let c = b[i][j].slice(1).split(':').filter(m => m != '')
        if (c.length > 2) counter++
        console.log(c)
        arr.push(c)
    }
}

for (let i of data) {
    let a = i.split(/:|@/)
    a = a.map(m => m.trim());
    num = parseInt(a[0].split('#')[1])
    let numarr = arr.filter(m => m.includes(num.toString()))
    let part2 = numarr.every(m => m.length === 1)
    if(part2)
    console.log(num)
}
// let numarr = arr.filter(m => m.includes('294'))
// console.log(numarr.every(m => m.length === 1))
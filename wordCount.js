wordCount = {
    N0 : 113,
    N1 : 230,
    N2 : 143,
    N3 : 122,
    N4 : 467,
    N5 : 328,
    N6 : 176,
    N7 : 68,
    N8 : 225,
    N9 : 164,
    N10: 336,
    N11: 427,
    N12: 101,
    N13: 121,
    N14: 97,
    N15: 363,
    N16: 235,
    N17: 156,
    N18: 213,
    N19: 220,
    N20: 132
}

let count = Object.keys(wordCount)


let sum = 0

for (let i=0;i<count.length;i++)
{
    sum+=wordCount[count[i]]
}

console.log(sum)
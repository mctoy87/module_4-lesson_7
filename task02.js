'use strict';
// 1ый вариант
const randomNumberGenerate = function (number, min, max) {
    const generate = [];

    for (let i=0; i<=number; i+=1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let random =  Math.floor(Math.random() * (max - min + 1)) + min;
        generate.push(random);
    }
    return generate;

}

console.log(randomNumberGenerate(7, 1, 10));


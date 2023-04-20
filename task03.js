'use strict';
// 1ый вариант
const randomNumberGenerate = function (number, min, max, str) {
    const generate = [];

    for (let i=0; i<number; i+=1) {
    
        min = Math.ceil(min);
        max = Math.floor(max);
        let random =  Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(str === 'even') {
            if(random % 2 !== 0) {
                random -= 1;
            }
        };

        if(str === 'odd') {
            if(random % 2 == 0) {
                random -= 1;
            }
        }
        generate.push(random)
    };
    return generate;
}

console.log(randomNumberGenerate(7, 1, 10, 'even'));




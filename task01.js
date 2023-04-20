'use strict';
// 1ый вариант
const randomNumberGenerate = function (number) {
    const generate = [];
    for (let i=0; i<=number; i+=1) {
        let random =  Math.floor(Math.random()*100)+1; //генерирует случайное число от 1 до 100(включительно)
        generate.push(random);
    }
    return generate;
}

console.log(randomNumberGenerate(7));

//2ой вариант

// const randomNumberGenerate = function (number) {
//     const generate = new Array(number);
//     console.log(generate);
//     let random =  Math.floor(Math.random()*100)+1; //генерирует случайное число от 1 до 100(включительно)
//     const newArr = [1, 2, 3, 4, 5, 6]
//     newArr.forEach((item) => {
//         newArr.shift();
//         newArr.push(random);
//     });
//     console.log(newArr);
    
//     return generate;
// }

// console.log(randomNumberGenerate(7));
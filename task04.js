'use strict';
// 1ый вариант

const generate = [];
const getLeapYear = function (n, m) {
    
    if (m > n) {
        for (let i=n; i<=m; i+=1) {
            generate.push(i);
        }
    }
    else {
        for (let i=m; i<=n; i+=1) {
            generate.push(i);
        }
    }
    let results = generate.filter((item) => ((item % 4 == 0) && (item % 100 != 0)));
    return results;

}






console.log(getLeapYear(2019, 2024));
console.log(generate);


// let results = getLeapYear(2019, 2024).filter((item) => ((item % 4 == 0) && (item % 100 != 0)) || (item % 400 == 0));

// function predicate(year)  {
//     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//         return year;
//     }
//     return false;
// }
// console.log(generate);
// let results = getLeapYear(2019, 2024).filter(predicate);
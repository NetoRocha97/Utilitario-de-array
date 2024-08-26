const num = [1, 3, 6 , -9, - 8, 14, 100, Math.PI, 19, -21];
let menorValor = Math.min(...num);
let maiorValor = Math.max(...num);
console.log(menorValor);
console.log(maiorValor);


for (let i = 0; i < 10; i++) {
    console.log(i); 
  }
  
function range(start, end, step) {
    let result = [];

    if (end === undefined) {
        end = start;
        start = 0;
    } 

    if (step === undefined) {
        step = 1;
    } 

    if (step > 0) {
        for (let i = start; i < end; i += step) {
            result.push(i);
        }
    }

    else {
        for (let i = start; i > end; i += step) {
            result.push(i);
        }
    }

    return result;
}

console.log(range(10));
console.log(range(1, 11));
console.log(range(0, 30, 5));

function zip(...arrays) {
    const minLength = Math.min(...arrays.map(arr => arr.length));
    let resultado = [];

    for (let i = 0; i < minLength; i++) {
        resultado.push(arrays.map(arr => arr[i]));
    }

    return resultado;
}

const nomes = ['moe', 'larry'];
const idade = [30, 40];
const nomes2 = ['moe', 'larry', 'curly'];
const idade2 = [30, 40, 50];
const verif = [true, false, false];

console.log(zip(nomes, idade));
console.log(zip(nomes2, idade2, verif));

function uniq(array) {
    return [...new Set(array)];
}
const num2 = [1, 2, 1, 4, 1, 3];
const num3 = [1, 2, 1, 3, 3];

const uniqueNum = uniq(num2);
const  uniqueNum2 = uniq(num3);

console.log(uniqueNum);
console.log(uniqueNum2);

function sortNum(array) {
    return array.sort((a, b) => a - b);
}

const numeros = [1, 3, 2];
const numeros2 = [1, 2, 10, 3, 32];

const sortedNumbers = sortNum(numeros);
const sortedNumbers2 = sortNum(numeros2)

console.log(sortedNumbers);
console.log(sortedNumbers2);

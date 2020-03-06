function getRandomArray(length, max, min) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    console.log(arr);
    return
}

getRandomArray(10, 50, 10);

let numb =[1,7,5,0,3,6,9];
function  getAverage(numb){
    let sum = 0;
    for (let i = 0; i < numb.length; i++) {
        sum = sum + numb[i];
    }
    let average = sum / numb.length;
    console.log(average.toFixed(2));
}
getAverage(numb);

let numbers = [1, 5, 7, -4, 8, 3, 55, 45];
console.log(numbers);

function countPositiveNumbers() {
    let counter = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] >= 0) {
            counter++;
        }
    }
    console.log(counter);
    return counter;

}

countPositiveNumbers(numbers);

function getDividedByFive() {
    let rightNumbers = [];
    for (let i = 0; i <= numbers.length; i++) {
        if ((numbers[i] % 5) === 0) {
            rightNumbers.push(numbers[i]);
        }
    }
    console.log(rightNumbers);
    return
}

getDividedByFive();

const replaceBadWords = (string) => {
    const badWords = ['shit', 'fuck'];
    const arrayToRegExp = new RegExp(badWords.join('|'), 'gi');
    return string.replace(arrayToRegExp, '****');
};
console.log(replaceBadWords('Are you fucking kidding?'));

const divideByThree = (string) => {
    const arrString = string.split(' ')
    const result = [];
    arrString.map(item => {
        for (let i = 0; i < item.length; i+=3) {
            result.push(item.slice(i, i + 3));
        }
    })
    return result
}
console.log(divideByThree('lfdlok'));


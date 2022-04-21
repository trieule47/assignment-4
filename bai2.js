function clearTheSameAndCount(numbers, apear) {
    for (let i = 0; i < numbers.length; i++) {
        let cout = 1;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                numbers.splice(j, 1);
                cout++;
                j--;
            }
        }
        apear.push(cout);
    }
}

function findMax(a, b) {
    return a > b ? a : b;
}

function findMin(a, b) {
    return a < b ? a : b;
}

function findInArray(callBack, numbers) {
    let result = numbers[0];
    let length = numbers.length
    numbers.forEach((number) => {
        result = callBack(result, number);
    })
    return result;
}


function findNumberApearMedium(numbers, apear) {
    let result = [];
    let length = apear.length;
    let maxApear = findInArray(findMax, apear);
    let minApear = findInArray(findMin, apear);
    for (let i = 0; i < length; i++) {
        if (maxApear != apear[i] && minApear != apear[i]) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function doIt(numbers, apear) {
    clearTheSameAndCount(numbers, apear);
    console.log(findNumberApearMedium(numbers, apear));
}

let numbers1 = [1, 2, 3, 1, 2, 1, 1];
let numbers2 = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];
let apearant1 = [];
let apearant2 = [];

doIt(numbers1, apearant1);
doIt(numbers2, apearant2);
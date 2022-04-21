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

function findInArray(callBack, numbers) {
    let result = numbers[0];
    let length = numbers.length
    numbers.forEach((number) => {
        result = callBack(result, number);
    })
    return result;
}

// findInArray(findMax,apear);
// findInArray(findMin,apear);

function findNumberApearMost(numbers, apear) {
    let result = [];
    let length = apear.length;
    let maxApear = findInArray(findMax, apear);
    for (let i = 0; i < length; i++) {
        if (maxApear == apear[i]) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function doIt(numbers, apear) {
    clearTheSameAndCount(numbers, apear);
    console.log(findNumberApearMost(numbers, apear));
}

let numbers1 = [1, 2, 3, 1, 2, 1, 1];
let numbers2 = [1, 2, 3, 1, 2, 1, 1, 2, 2];
let apearant1 = [];
let apearant2 = [];

doIt(numbers1, apearant1);
doIt(numbers2, apearant2);
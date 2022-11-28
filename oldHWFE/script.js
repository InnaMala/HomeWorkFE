let camelise = function (str) {
    let arr = str.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            i = i + 1;
            arr[i] = arr[i].toUpperCase();
        }
    }

    str = arr.join("");
    arr = str.split('-');
    str = arr.join("");
    return str;
}

console.log(camelise('my-short-string'));


// let arr = function([1, -2, 3, 4, -9, 6]);
// let arr = sumPositiveElement([]);
// let arr = sumNegativeElement([]);

let sum = function(arrNumbers) {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        const element = arrNumbers[i];
        if (element<0)  {
           negative+=element
        }  else {
            positive+=element
        }
    }
    return [negative,positive]
}
console.log(sum([1, -2, 3, 4, -9, 6]))

//2 вариант
let sumPosAndNeg = function(arrNumbers) {
    let positive = sumWithStatus(arrNumbers,'+');
    let negative = sumWithStatus(arrNumbers,'-');
    return [negative,positive]
}

let sumWithStatus = function(arrNumbers, status) {
		let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
    	const element = arrNumbers[i];
			if (status === '-' && element<0) {
        sum+=element
			}
			if (status === '+' && element>0) {
        sum+=element
			}
    }
    return sum;
}
console.log(sumPosAndNeg([1, -2, 3, 4, -9, 6]));


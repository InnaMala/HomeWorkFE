let camelise = function(str) {
let arr = str.split([]); 

 for (let i=0;i<arr.length;i++) {
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
// for (let i>0;i<arr;i++) {
//     if(arr[i]>0 == sumPositiveElement) {   
// }
// console.log(sumPositiveElement);
// console.log(sumNegativeElement);

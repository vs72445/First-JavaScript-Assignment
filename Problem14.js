function leftRotateArray(arr, k) {
    let myArray = [];
    for (let i = 0; i < k; i++) {
       myArray.push(arr.shift());
    }
    arr = arr.concat(myArray);
    return arr;
 }
 
 
 arr = [1, 2, 3, 4, 5, 6, 7]
 let result = leftRotateArray(arr, 3);
 console.log(result);
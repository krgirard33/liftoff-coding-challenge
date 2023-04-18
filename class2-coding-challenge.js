// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]



function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    
    let result =  [];
    for (i=0; i< arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (i=0; i< arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    result.push(min);
    result.push(max);

    return result;
}
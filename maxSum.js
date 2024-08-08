// max sub array of size k, Sliding window technique of fixed size k

let arr = [8,3,-8,2,1,3,1];
let n = arr.length;
let k = 3;

function variable_size_sliding_window(arr, n, k) {
    // getting sum of first sub array of size k
    let sum = 0;    
    for(let i=0; i<k; i++) {
        sum += arr[i];
    }
    
    let maxSum = sum;
    
    let subArrLastIndex = k-1; // It will track the last index of sub array which has max sum

    // finding max sub array sum
    let j=k;
    while(j<n) {
        sum += arr[j];
        sum -= arr[j-k];
        if(sum > maxSum) {
            maxSum = sum;
            subArrLastIndex = j;
        }
        j++;
    }

    console.log(maxSum);
    
    // creating sub array by the help of "subArrLastIndex" variable
    let subArr = new Array(k);
    let count = subArr.length-1;

    // this loop will start storing the el from last so that there will no need to reverse further
    for(let i=subArrLastIndex; i>subArrLastIndex-k; i--) {
        subArr[count] = arr[i];
        count--;
    }

    console.log(subArr);
}

variable_size_sliding_window(arr, n, k);

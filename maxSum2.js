
let arr = [8,3,-8,2,1,3,1];
let n = arr.length;
let k = 3;


function fixed_size_sliding_window(arr, n, k) {
    let maxSum = 0;

    for(let i=0; i<=n-k; i++) {
        let sum = 0;

        for(let j=i; j<i+k; j++) {
            subArr.push(arr[j]);
            sum += arr[j];
        }
        sum > maxSum ? maxSum = sum : null;
    }
    console.log(subArr,maxSum);
}

fixed_size_sliding_window(arr, n, k);
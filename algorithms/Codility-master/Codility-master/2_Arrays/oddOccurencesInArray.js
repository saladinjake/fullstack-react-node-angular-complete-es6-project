


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 100% https://app.codility.com/demo/results/training2KHES6-2P7/
    if (A.length == 1){
        return A[0]
    }

    var dict = new Object();
    for (let i=0 ; i < A.length ; i++) {
        if (A[i] in dict){
            dict[A[i]] += 1
        }
        else{
            dict[A[i]] = 1
        }
    }
    for (var item in dict) {
        if(dict[item] % 2 != 0){
            return Number(item)
        }
    }
}
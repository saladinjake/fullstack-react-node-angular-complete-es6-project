function solution(X, A) {

    if (A.length < X) return -1;

    let numbersCounter = new Array(X).fill(0);
    let sumOfOneToX = 0;
    
    for(let i = 1; i <= X; i++) {
        sumOfOneToX += i;
    }
    
    for(let i = 0; i < A.length; i++) {
        if (numbersCounter[A[i] - 1] == 0) {
            numbersCounter[A[i] - 1]++;
            sumOfOneToX -= A[i];
        }
        if (sumOfOneToX == 0) return i;
    }
    
    return -1;
}
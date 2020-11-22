int solution(int A[], int N) {

    int maxSliceSum = 0, curSliceSum = 0, biggestNumber = A[0];
    
    for(int i = 0; i < N; i++) {
        if (A[i] > biggestNumber) {
            biggestNumber = A[i];
        }
        
        if (curSliceSum + A[i] < 1) {
            curSliceSum = 0;
        }
        
        else {
            curSliceSum += A[i];
            if (curSliceSum > maxSliceSum) {
                maxSliceSum = curSliceSum;
            }
        }
    }
    
    if (maxSliceSum == 0) return biggestNumber;
    
    return maxSliceSum;
}
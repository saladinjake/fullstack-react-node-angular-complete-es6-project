int solution(int A[], int N) {
    
    int sumWithoutMissingElem = N + 1, sumOfArray = 0, i;
    
    for(i = 0; i < N; i++) {
        sumWithoutMissingElem += i + 1;
        sumOfArray += A[i];
    }
    
    return sumWithoutMissingElem - sumOfArray;
}
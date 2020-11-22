int solution(int A[], int N) {
    
    int num = A[0];
    
    for(int i = 1; i < N; i++) {
        num ^= A[i];
    }
    
    return num;
}
//TRICK I'VE LEARNED IN CRYPTOGRAPHY
int solution(int A, int B, int K) {
    
    int range = B - A + 1, minDivisibles = A + (range / K) * K;

    if (K == 1) {
        return range;
    }
    if (A == B && B % K == 0) {
        return 1;
    }
    if (K > B) {
        return 0;
    }
    for(int i = minDivisibles; i <= B; i++) {
        if (i % K == 0)
            return range / K + 1; 
    }
    return range / K;
}
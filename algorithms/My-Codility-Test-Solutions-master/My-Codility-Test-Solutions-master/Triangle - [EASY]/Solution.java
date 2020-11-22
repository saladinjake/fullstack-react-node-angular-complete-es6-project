import java.util.Arrays; 

class Solution {
    public int solution(int[] A) {

        if (A.length < 3) return 0;

        int p, q, r;
        double sum;
        
        Arrays.sort(A);
        
        for(p = 0; p < A.length && A[p] < 0; p++) continue;
        
        for(q = p + 1, r = p + 2; r < A.length; p++, q++, r++) {
            sum = (double)A[p] + (double)A[q];
            if (sum > A[r])
                return 1;
        }
        
        return 0;
    }
}
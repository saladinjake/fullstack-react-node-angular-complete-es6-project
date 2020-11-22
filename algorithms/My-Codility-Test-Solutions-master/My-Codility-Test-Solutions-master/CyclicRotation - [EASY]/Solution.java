class Solution {
    public int[] solution(int[] A, int K) {

        int i, j, rotations = K;
        
        if (A.length < 2) return A;
        if (rotations > A.length) rotations = rotations % A.length;
        if (rotations == 0) return A;
        
        int[] resultArray = new int[A.length];
    
        for(i = 0, j = rotations; i < A.length; i++, j++) {      
            if (j == A.length)
                j = 0;
            resultArray[j] = A[i];
        }
        
        return resultArray;
    }
}

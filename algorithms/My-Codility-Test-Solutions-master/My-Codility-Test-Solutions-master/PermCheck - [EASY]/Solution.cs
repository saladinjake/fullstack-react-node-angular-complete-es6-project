class Solution {
    public int solution(int[] A) {

        int N = A.Length;
        int[] numbersCounter = new int[N];
        
        for(int i = 0; i < N; i++) {
            if (A[i] > N || numbersCounter[A[i] - 1] > 0) {
                return 0;
            }
            numbersCounter[A[i] - 1]++;
        }
        
        return 1;
    }
}
class Solution {
    public int solution(int[] A) {
        
        int[] westCounter = new int[A.Length];
        int passingCars = 0;
        
        for(int i = 1; i < A.Length; i++) {
            if (A[i] == 1) {
                westCounter[i] += westCounter[i - 1] + 1;
            }
            else {
                westCounter[i] = westCounter[i - 1];
            }
        }
        
        for(int i = 0; i < A.Length; i++) {
            if (A[i] == 0) {
                passingCars += westCounter[A.Length - 1] - westCounter[i];
            }
            if (passingCars > 1000000000) return -1;
        }
        
        return passingCars;
    }
}
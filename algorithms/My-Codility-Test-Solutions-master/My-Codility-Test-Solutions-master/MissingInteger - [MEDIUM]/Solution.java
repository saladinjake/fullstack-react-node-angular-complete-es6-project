class Solution {
    public int solution(int[] A) {
        
        int[] counter = new int[1000000];
        boolean isTherePositive = false;
    
        for(int num : A) {
            if (num < 1) {
                continue;
            }
            isTherePositive = true;
            counter[num - 1]++;
        }
        
        if (isTherePositive == false) return 1;
        
        for(int i = 0;; i++) {
            if (counter[i] == 0) return i + 1;
        }
    }
}
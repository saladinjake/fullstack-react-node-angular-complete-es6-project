class Solution {
    public int solution(int[] A) {
        
        if (A.length < 2) return 0;
        
        int lowestPrice = A[0], maxProfit = 0;
        int[] profitFromLowestPrice = new int[A.length];
        
        for(int i = 1; i < A.length; i++) {
            if (A[i] < lowestPrice) {
                lowestPrice = A[i];
            } else {
                profitFromLowestPrice[i] = A[i] - lowestPrice;
            }
        }
        
        for(int profit : profitFromLowestPrice) {
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
        
        return maxProfit;
    }
}

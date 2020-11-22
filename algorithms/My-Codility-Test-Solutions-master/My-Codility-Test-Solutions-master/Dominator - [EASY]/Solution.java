import java.util.Arrays;

class Solution {
    public int solution(int[] A) {

        if (A.length == 0) return -1;
        if (A.length == 1) return 0;

        int[] sortedArray = A.clone();
        int middle = A.length / 2, count = 1, middleNumber;

        Arrays.sort(sortedArray);
        middleNumber = sortedArray[middle];

        for(int i = middle + 1; i < A.length && sortedArray[i] == middleNumber; i++) {
            count++;
        }

        for(int i = middle - 1; i >= 0 && sortedArray[i] == middleNumber; i--) {
            count++;
        }

        if (count > A.length / 2) {
            for(int i = 0;; i++) {
                if (A[i] == middleNumber) return i;
            }
        }

        return -1;
    }
}
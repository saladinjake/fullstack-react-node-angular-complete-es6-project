using System;

class Solution {
    public int[] solution(int N, int[] A) {

        int[] counters = new int[N];
        int maxVal = 0;
        int lastMaxNumIndex = -1;
        int lastMaxCounterVal = 0;
        
        for(int i = 0; i < A.Length; i++) {
            if (A[i] == N + 1) {
                lastMaxNumIndex = i;
                lastMaxCounterVal = maxVal;
            }
            else {
                if (counters[A[i] - 1] < lastMaxCounterVal) {
                    counters[A[i] - 1] = lastMaxCounterVal + 1;
                }
                else {
                    counters[A[i] - 1]++;
                }
                if (counters[A[i] - 1] > maxVal) {
                    maxVal = counters[A[i] - 1];
                }
            }
        }

        if (maxVal == 0) return counters;

        int startPoint = 0;

        if (lastMaxNumIndex != -1) {
            startPoint = lastMaxNumIndex + 1;
            for(int i = 0; i < N; i++) {
                counters[i] = lastMaxCounterVal;
            }
            for(int i = startPoint; i < A.Length; i++) {
                counters[A[i] - 1]++;
            }
        }
        
        return counters;
    }
}
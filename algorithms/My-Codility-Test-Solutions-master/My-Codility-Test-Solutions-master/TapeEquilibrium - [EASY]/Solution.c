#include <stdlib.h>

int solution(int A[], int N) {

    int sumPerIndexFromBegining[N], sumPerIndexFromEnd[N], minimalDifference, sum;
    
    sumPerIndexFromBegining[0] = A[0];
    sumPerIndexFromEnd[N - 1] = A[N - 1];
    
    for(int i = 1, j = N - 2; i < N; i++, j--) {
        sumPerIndexFromBegining[i] = sumPerIndexFromBegining[i - 1] + A[i];
        sumPerIndexFromEnd[j] = sumPerIndexFromEnd[j + 1] + A[j];
    }
    
    minimalDifference = abs(sumPerIndexFromEnd[1] - sumPerIndexFromBegining[0]);
    
    for(int p = 2; p < N; p++) {
        sum = abs(sumPerIndexFromEnd[p] - sumPerIndexFromBegining[p - 1]);
        if (sum < minimalDifference) {
            minimalDifference = sum;
        }
    }
    
    return minimalDifference;
}
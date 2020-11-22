import java.lang.Math;

class Solution {
    public int solution(int[] A) {
        
        if (A.length < 3) return 0;
        
        int[] peaks = new int[A.length];
        int firstPeak = -1, lastPeak = -1, numberOfPeaks = 0, firstLastPeaksDistance;
        int rootFloor, maxNumberOfFlags, flags, lastVisitedPeak, distanceFromLastVisitedPeak;
        int curNumOfFlags, bestSoFarNumOfFlags = 0;
        
        for(int i = 1; i < A.length - 1; i++) {
            if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
                if (firstPeak == -1) {
                    firstPeak = lastPeak = i;
                } else {
                    lastPeak = i;
                }
                peaks[i]++;
                numberOfPeaks++;
                i++;
            }
        }
        
        if (numberOfPeaks < 3) return numberOfPeaks;
        
        firstLastPeaksDistance = lastPeak - firstPeak + 1;
        rootFloor = (int)Math.sqrt(firstLastPeaksDistance);
        
        if (rootFloor * (rootFloor + 1) < firstLastPeaksDistance) {
            maxNumberOfFlags = rootFloor + 1;
        } else {
            maxNumberOfFlags = rootFloor;
        }
        
        if (numberOfPeaks < maxNumberOfFlags) maxNumberOfFlags = numberOfPeaks;
        
        for(int i = 2; i <= maxNumberOfFlags; i++) {
            lastVisitedPeak = firstPeak;
            curNumOfFlags = 1;
            distanceFromLastVisitedPeak = i - 1;
            for(int j = firstPeak + i; j < peaks.length - 1; j++) {
                distanceFromLastVisitedPeak++;
                if (peaks[j] == 1 && distanceFromLastVisitedPeak >= i) {
                    curNumOfFlags++;
                    distanceFromLastVisitedPeak = i - 1;
                    j += i - 1;
                }
                if (curNumOfFlags == i) break;
            }
            if (curNumOfFlags > bestSoFarNumOfFlags) {
                bestSoFarNumOfFlags = curNumOfFlags;
            }
        }
        
        return bestSoFarNumOfFlags;
    }
}

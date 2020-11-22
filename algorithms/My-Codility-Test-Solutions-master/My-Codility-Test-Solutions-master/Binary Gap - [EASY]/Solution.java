class Solution {
    public int solution(int num) {

        if (num < 5) return 0;
        
        String biNum = Integer.toBinaryString(num);
        int biggestGap = 0, count = 0;

        for (int i = 1; i < biNum.length(); i++) {
            switch(biNum.charAt(i)) {
                case '0':
                    count++;
                    break;
                    
                case '1':
                    if (count > biggestGap) {
                        biggestGap = count;
                    }
                    count = 0;
                    break;
            }
        }
        return biggestGap;
    }
}
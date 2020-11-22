import java.util.Stack;

class Solution {
    public int solution(int[] A, int[] B) {
        
        if (A.length < 2) return 1;
        
        int stayAlive = 0;
        Stack<Integer> stack = new Stack<Integer>();
        
        for(int i = 0; i < A.length; i++) {
            switch(B[i]) {
                case 0:
                    if (stack.empty()) {
                        stayAlive++;
                    } else {
                        while(!stack.empty()) {
                            if (stack.peek() > A[i]) {
                                break;
                            } else {
                                stack.pop();
                                if (stack.empty()) stayAlive++;
                            }
                        }
                    }
                    break;
                    
                case 1:
                    stack.push(A[i]);
                    break;
            }
        }
        
        stayAlive += stack.size();
        return stayAlive;
    }
}
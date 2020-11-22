import java.util.Stack;

class Solution {
    public int solution(int[] H) {

        int blocks = 0;
        Stack<Integer> stack = new Stack<Integer>();

        for(int i = 0; i < H.length; i++) {
            if (stack.empty() || H[i] > stack.peek()) {
                stack.push(H[i]);
                blocks++;
            }
            else if (H[i] == stack.peek()) {
                continue;
            }
            else {
                while(true) {
                    if (stack.empty() || H[i] > stack.peek()) {
                        stack.push(H[i]);
                        blocks++;
                        break;
                    }
                    else if (H[i] < stack.peek()) {
                        stack.pop();
                    }
                    else {
                        break;
                    }
                }
            }
        }
        
        return blocks;
    }
}
import java.util.*;

class Solution {
    public int solution(String S) {

        if (S.length() == 0) return 1;
        if (S.length() % 2 != 0) return 0;
        if (S.charAt(0) == '}' || S.charAt(0) == ']' ||
            S.charAt(0) == ')' || S.charAt(S.length() - 1) == '{' ||
            S.charAt(S.length() - 1) == '[' || S.charAt(S.length() - 1) == '(') {
                
                return 0;
            }

        Stack<Character> stack = new Stack<Character>();
        stack.push(S.charAt(0));

        for (int i = 1; i < S.length(); i++) {

            if (stack.size() > S.length() - i) return 0;

            switch(S.charAt(i)) {
                case '{':
                case '[':
                case '(':
                    stack.push(S.charAt(i));
                    break;
                case '}':
                    if (stack.empty() || stack.peek() != '{')
			return 0;
                    stack.pop();
                    break;
                case ']':
                    if (stack.empty() || stack.peek() != '[') 
			return 0;
                    stack.pop();
                    break;
                case ')':
                    if (stack.empty() || stack.peek() != '(')
			return 0;
		    stack.pop();
                    break;
            }
        }
        
        if (stack.empty()) return 1;
        
        return 0;
    };
}
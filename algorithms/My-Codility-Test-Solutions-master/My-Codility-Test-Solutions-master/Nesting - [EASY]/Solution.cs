using System.Collections.Generic;

class Solution {
    public int solution(string S) {

        if (S.Length == 0) return 1;
        if (S.Length % 2 != 0) return 0;
        if (S[0] == ')' || S[S.Length - 1] == '(') return 0;

        Stack<char> stack = new Stack<char>();
        stack.Push(S[0]);

        for (int i = 1; i < S.Length; i++) {

            if (stack.Count > S.Length - i) return 0;

            if (S[i] == '(') {
                stack.Push(S[i]);
            } else {
                if (stack.Count == 0) {
                    return 0;
                }
                stack.Pop();
            }
        }
        
        if (stack.Count == 0) return 1;
        
        return 0;
    }
}

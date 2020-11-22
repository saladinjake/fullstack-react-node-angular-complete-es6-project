using System;
using System.Collections;

class Solution {
    public int solution(int[] A) {

        if (A.Length == 1) return 0;

        Hashtable ht = new Hashtable();
        int len = A.Length;
        int leaderCount = 1;
        int leader = A[0];

        ht.Add(A[0], 1);

        for(int i = 1; i < len; i++) {
            if (!ht.ContainsKey(A[i])) {
                ht.Add(A[i], 1);
            }
            else {
                int value = (int)ht[A[i]] + 1;
                ht[A[i]] = value;
                if (leaderCount < value) {
                    leaderCount = value;
                    leader = A[i];
                }
            }
        }

        if (leaderCount <= len / 2) return 0;

        int counter = 0;
        int equiLeaders = 0;

        for(int i = 0; i < len; i++) {
            if (A[i] == leader) {
                counter++;
            }
            if (counter * 2 > i + 1 && (leaderCount - counter) * 2 > len - (i + 1)) {
                equiLeaders++;
            }
        }
        
        return equiLeaders;
    }
}
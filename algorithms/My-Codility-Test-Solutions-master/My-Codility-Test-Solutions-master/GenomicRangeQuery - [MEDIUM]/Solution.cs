class Solution {
    public int[] solution(string S, int[] P, int[] Q) {

        int[] typeA = new int[S.Length + 1], typeC = new int[S.Length + 1];
        int[] typeG = new int[S.Length + 1], typeT = new int[S.Length + 1];
        int[] results = new int[P.Length];

        for(int i = 0; i < S.Length; i++) {
            switch(S[i]) {
                case 'A':
                    typeA[i + 1] += typeA[i] + 1;
                    typeC[i + 1] = typeC[i];
                    typeG[i + 1] = typeG[i];
                    typeT[i + 1] = typeT[i];
                    break;
                case 'C':
                    typeA[i + 1] = typeA[i];
                    typeC[i + 1] += typeC[i] + 1;
                    typeG[i + 1] = typeG[i];
                    typeT[i + 1] = typeT[i];
                    break;
                case 'G':
                    typeA[i + 1] = typeA[i];
                    typeC[i + 1] = typeC[i];
                    typeG[i + 1] += typeG[i] + 1;
                    typeT[i + 1] = typeT[i];
                    break;
                case 'T':
                    typeA[i + 1] = typeA[i];
                    typeC[i + 1] = typeC[i];
                    typeG[i + 1] = typeG[i];
                    typeT[i + 1] += typeT[i] + 1;
                    break;    
            }
        }

        for(int i = 0; i < P.Length; i++) {

            if (typeA[Q[i] + 1] - typeA[P[i]] > 0) {
                results[i] = 1;
            }
            else if (typeC[Q[i] + 1] - typeC[P[i]] > 0) {
                results[i] = 2;
            }
            else if (typeG[Q[i] + 1] - typeG[P[i]] > 0) {
                results[i] = 3;
            }
            else {
                results[i] = 4;
            }
        }

        return results;
    }
}
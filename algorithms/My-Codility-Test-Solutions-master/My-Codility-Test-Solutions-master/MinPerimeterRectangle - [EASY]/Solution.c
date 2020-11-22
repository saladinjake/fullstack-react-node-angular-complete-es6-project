#include<math.h>

int solution(int N) {
    
    if (N == 1) return 4;
    
    int minPerimeter = (1 + N) * 2, root = (int)sqrt(N);
    double B, res;
    
    for(double A = 2; A <= root; A++) {
        B = N / A;
        if (B - (int)B == 0 && (res = (A + B) * 2) < minPerimeter) {
            minPerimeter = res;
        }
    }
    
    return minPerimeter;
}
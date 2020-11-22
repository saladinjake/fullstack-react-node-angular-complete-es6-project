#include<math.h>

int solution(int N) {
    
    if (N == 1) return 1;
    
    int factors;
    double res, root = sqrt(N);
    
    if ((int)root * (int)root == N) factors = 3;
    else factors = 2;
    
    for(double i = 2; i < root; i++) {
        res = N / i;
        if (res - (int)res == 0) factors += 2;
    }
    
    return factors;
}
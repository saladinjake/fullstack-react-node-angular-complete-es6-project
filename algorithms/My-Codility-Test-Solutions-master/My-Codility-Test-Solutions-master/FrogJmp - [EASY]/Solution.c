int solution(int X, int Y, int D) {

    if (X == Y) return 0;
    
    int distance = Y - X;

    if (D > distance) return 1;

    if (distance % D == 0) return distance / D;
    
    return distance / D + 1;
}
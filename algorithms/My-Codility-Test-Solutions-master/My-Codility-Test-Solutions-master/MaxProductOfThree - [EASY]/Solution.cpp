#include <algorithm>

int solution(vector<int> &A) {

    int N = A.size();

    if (N == 3) return A[0] * A[1] * A[2];

    std::sort(A.begin(), A.end());

    if (A[N - 1] < 0 || A[1] >= 0) { // 0 or 1 or all negative
        return A[N - 1] * A[N - 2] * A[N - 3];
    }

    if (A[0] * A[1] > A[N - 2] * A[N - 3])
        return A[0] * A[1] * A[N - 1];

    return A[N - 1] * A[N - 2] * A[N - 3];
}
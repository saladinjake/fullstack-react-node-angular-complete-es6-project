# 100%
def solution(A):
    # write your code in Python 3.6
    L_slice, R_slice, count = 0, 0, 0

    for Z in range(3, len(A)):
        L_slice = max(0, A[Z-2] + L_slice)
        R_slice = max(L_slice, A[Z-1] + R_slice)
        count = max(R_slice, count)

    return count

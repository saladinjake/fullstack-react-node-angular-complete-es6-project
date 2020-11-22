# 100%
def solution(A):
    # write your code in Python 3.6
    if len(A) == 0:
        return -1
    min_idx = 0
    min_avg = (A[0]+A[1])/2.0

    for idx in range(0, len(A)-2):
        avg_2 = (A[idx] + A[idx+1]) / 2.0
        avg_3 = (A[idx] + A[idx+1] + A[idx+2]) / 3.0

        if min_avg > avg_2:
            min_avg = avg_2
            min_idx = idx

        if min_avg > avg_3:
            min_avg = avg_3
            min_idx = idx

    avg_2 = (A[-2] + A[-1]) / 2.0
    if min_avg > avg_2:
        return len(A)-2

    return min_idx
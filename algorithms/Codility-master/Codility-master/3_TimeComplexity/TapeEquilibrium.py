

# 100%
def solution(A):
    # write your code in Python 3.6
    if len(A) <= 1:
        return 0
    if len(A) == 2:
        return abs(A[1] - A[0])
        
    sum_l = A[0]
    sum_r = sum(A[1:])
    dis = abs(sum_l - sum_r)
    for i in range(1, len(A)-1):
        sum_l += A[i]
        sum_r -= A[i]
        dis = min(dis, abs(sum_l - sum_r))
        
    return dis
        
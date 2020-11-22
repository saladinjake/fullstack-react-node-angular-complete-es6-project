# 100%
def solution(A):
    # write your code in Python 3.6
    if len(A) == 0: return 0
    if len(A) == 1: return A[0]
    
    count = 0
    max_slice = float("-inf")
    for item in A:
        count = max(item, count + item)
        max_slice = max(max_slice, count)
    return max_slice
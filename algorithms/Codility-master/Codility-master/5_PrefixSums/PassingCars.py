# 100%
def solution(A):
    # write your code in Python 3.6
    
    n = len(A)
    if n == 0:
        return 0
    
    count0 = 0
    count = 0
    for i in range(n):
        if A[i] == 0:
            count0 += 1
        if A[i] == 1:
            count += count0
        if count > 1e9:
                return -1    
            
    return count
        
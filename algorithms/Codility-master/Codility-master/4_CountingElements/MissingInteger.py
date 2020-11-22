

# 100%

def solution(A):
    # write your code in Python 3.6
    n = len(A)
    if n == 0:
        return 1
        
    counts = [0] * n # to count the occurences of values in A
    neg = 0 # to check if all values are negative
    
    for i in range(n):
        if A[i] > 0:
            if A[i] <= n:
                counts[A[i]-1] += 1
        else:
            neg +=1
            
    if neg == n:
        return 1 # return 1 if all values are negative
        
    for i in range(n):
        if counts[i] == 0:
            return i+1 # return the appropriate value
    return n+1 # else return the len(A) + 1


# 62%
def solutionB(A, B, K):
    if (A>B) or (K < 0):
        return 0
    if K ==1:
        return B + 1 - A
    # write your code in Python 3.6
    count = 0
    for i in range(A, B +1):
        if i % K == 0:
            count += 1
            
    return count

# 100%
def solution(A, B, K):
    Ｘ = 1 if (A % K) == 0 else 0
    return (B // K) - (A // K)  + X
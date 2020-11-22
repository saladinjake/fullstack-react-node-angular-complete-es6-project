
# 30%
def solutionC(A):
    n = len(A) + 1
    nums = (int((n+1)/2))*n
    
    return nums - sum(A)

# 100%
def solution(A):
    if len(A) == 0:
        return 1
    if (len(A) == 1) and (A[0] != 1):
        return 1
        
    n = len(A) + 1
    nums = int(((n+1)/2)*n)
    for num in A:
        nums -= num
    return nums
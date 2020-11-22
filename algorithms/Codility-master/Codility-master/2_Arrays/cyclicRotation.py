

def solution(A , K):
    
    if len(A) <=1:
        return A
        
    for i in range(K):
        temp = A[-1]
        A[1:] = A[:-1]
        A[0] = temp
    return A
def solution(A):
    if len(A) == 0:
        return []
    
    indices = []
    for i in range( len(A)):
        if sum(A[:i]) == sum(A[i+1:]):
            #return i
            indices.append(i)
            
    #in case you want return them all
    if len(indices):
        return indices
    return -1

def equ(A):
    if len(A) == 0:
        return []
    indices = []
    sum_r = sum(A)
    sum_l = 0

    for i in range(len(A)):
        sum_r -= A[i]
        if sum_r == sum_l:
            #return i
            indices.append(i)
        sum_l +=A[i]

    #in case you want return them all
    if len(indices):
        return indices
    return -1
    
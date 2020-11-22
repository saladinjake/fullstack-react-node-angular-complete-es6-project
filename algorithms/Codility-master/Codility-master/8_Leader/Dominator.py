# 100%
from collections import Counter

def solution(A):
    
    # write your code in Python 3.6
    
    if len(A) == 0:
        return -1

    dominator, dominator_count = Counter(A).most_common()[0]

    if dominator_count <= len(A) // 2:
        return -1

    return A.index(dominator)

# not efficient
def solution2(A):
    
    if len(A) == 0:
        return -1
    A.sort()
    num = int(len(A)/2) 
    for i in range(int(len(A)/2)):
        if A[i] == A[i+num]:
            return i
    return -1 

    
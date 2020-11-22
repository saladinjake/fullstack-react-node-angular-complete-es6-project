def solution(A):
    # write your code in Python 3.6
    if len(A) <= 2 : return 0
    
    sorA = sorted(A)
    
    for i in range(len(sorA) - 2):
        p = sorA[i]
        q = sorA[i + 1]
        r = sorA[i + 2]
        
        if (p+q>r) :
            return 1
                
    return 0
        


# 100%
import collections
def solution(A):
    # write your code in Python 3.6
    if len(A) == 0:
        return 0
        
    s = sorted(A)
    for i in range(len(A)):
        if (s[i]-1 - i) != 0:
            return 0
            
    return 1
# 100%
from collections import Counter
def solution(A):
    result = 0
    dominator, dom_count  = Counter(A).most_common()[0]
    left = 0
    for idx, value in enumerate(A):
            
        if value == dominator: left += 1
        if left > (idx + 1)//2 and ((dom_count - left) > (len(A) - (idx + 1))//2):
            result +=1

    return result

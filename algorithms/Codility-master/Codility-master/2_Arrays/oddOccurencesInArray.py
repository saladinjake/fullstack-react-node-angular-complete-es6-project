
# 66% 
def solutionB(A):
    
    if len(A) == 1:
        return A[0]
    # write your code in Python 3.6
    nums = []
    for num in A:
        if num in nums:
            del nums[nums.index(num)]
        else:
             nums.append(num)
            
    return nums[0]

# 100%
import collections
def solution(A):
    
    if len(A) == 1:
        return A[0]
        
    c = collections.Counter(A)
    for item in c:
        if (c[item] % 2) != 0:
            return item



# 100%
def solution(X, A):
    # write your code in Python 3.6
    nums = [-1] * (X + 1)
    
    for i in range(len(A)):
        if nums[A[i]] ==-1:
            nums[A[i]] = i 
     
    if -1 not in nums[1:]:
        return max(set(nums))

    return -1
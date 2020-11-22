#  100%
def solution(A):
    # write your code in Python 3.6
    if len(A) >=3:
        A.sort()
        return max(A[-3] * A[-2] * A[-1] , A[0] * A[1] * A[-1])
    else:
        return 0
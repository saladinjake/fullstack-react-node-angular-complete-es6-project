# 100%
def solution(S):
    # write your code in Python 3.6
    if len(S) == 0: return 1
    pairs = { '(':')'}
    stack = []
    for item in S:
        if item in pairs:
            stack.append(pairs[item])
        
        if len(stack)!=0:
            if stack[-1] == item:
                del stack[-1]
        else:
            return 0
    if len(stack)==0: return 1
    return 0
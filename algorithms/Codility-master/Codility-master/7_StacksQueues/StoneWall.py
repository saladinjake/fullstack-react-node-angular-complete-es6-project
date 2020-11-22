# 100%
def solution(H):
    # write your code in Python 3.6
    if len(H) < 2: return len(H)
    stack = []
    count = 0
    
    for item in H:
        
        while len(stack) != 0 and stack[-1] > item:
            stack.pop() 
        
        if len(stack) != 0 and stack[-1] == item:
            continue
        
        stack.append(item)
        #print(stack)
        count += 1
                    
    return count
                    
            
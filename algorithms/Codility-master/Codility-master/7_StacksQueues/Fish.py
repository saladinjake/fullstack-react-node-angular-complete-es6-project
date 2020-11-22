# 100%
def solution(A, B):
    # write your code in Python 3.6
    num = len(A)
    if num < 2: return num
    
    alive_fish = []
    
    for i in range(num):
        challenger = i
        
        while alive_fish and B[alive_fish[-1]] == 1 and B[challenger] == 0:
            surviver = alive_fish.pop()
            if A[surviver] > A[challenger]:
                challenger = surviver
                
        alive_fish.append(challenger)            
      
    return len(alive_fish)
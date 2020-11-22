# 100%
def solution(A):
    # write your code in Python 3.6
    if len(A):
    
        circles = []
        for i in range(len(A)) :
            circles.append([i - A[i] , 'L'])
            circles.append([i + A[i] , 'R'])
    
        circles.sort(key = lambda x :(x[0],x[1]))
        intersections = 0
        actives = 0
    
        for _, flag in circles:
            if flag == 'L':
                intersections += actives
                actives += 1
            else:
                actives -= 1
            
            if intersections > 10e6:
                return -1
    
        return intersections
    return 0

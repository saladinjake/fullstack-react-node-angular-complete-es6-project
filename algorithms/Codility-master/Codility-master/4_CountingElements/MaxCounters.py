
# 66% O(N^2)
def solutionB(N, A):
    # write your code in Python 3.6
    if N == 0:
        return []
        
    if len(A) == 0:
        return  [0] * N
        
    counters = [0] * N
    
    for num in A:
        if num == N+1:
            counters = [max(counters)] * N
        if num>= 1 and num <= N:
            counters[num - 1] += 1
            
    return counters


# 100%  https://app.codility.com/demo/results/training6TVHH8-Y8U/
def solution(N, A):
    if N == 0:
        return []
        
    if len(A) == 0:
        return  [0] * N
        
    counters = [0] * N
    max_val = 0
    current_max = 0
    
    for v in A:
        if 1 <= v <= N:
            if max_val > counters[v-1]:
                counters[v-1] = max_val
            counters[v-1] += 1
            if current_max < counters[v-1]:
                current_max = counters[v-1]
        else:
            max_val = current_max
    counters = [max(max_val,i) for i in counters]
    return counters
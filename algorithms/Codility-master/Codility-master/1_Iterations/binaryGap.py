
def solution(N):
    # write your code in Python 3.6
    
    if N <= 2:
        return 0
    print(format(N,'b'))
    return len(max(format(N,'b').strip('0').split('1')))


print(solution(32))
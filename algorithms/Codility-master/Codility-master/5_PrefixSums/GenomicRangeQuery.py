
# 100%
def solution(S, P, Q):
    # write your code in Python 3.6
    
    impact = { 'A' : 1,
               'C' : 2,               
               'G' : 3,               
               'T' : 4  }

    N = []
    for idx in range (0 , len(P)):
        for f in impact:
            if f in S[P[idx]:Q[idx]+1]:
                N.append(impact[f])
                print(idx)
                print(f)
                print(S[P[idx]:Q[idx]+1])
                break
    
    return N

print(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]))
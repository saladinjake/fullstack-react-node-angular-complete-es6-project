# 100%
def solution(A):
    # write your code in Python 3.6
    if len(A) < 2: return 0
    
    min_price = 2*10E4
    max_profit = 0

    for X in A:
        min_price = min(min_price, X)
        max_profit = max(max_profit, X - min_price)

    return max_profit

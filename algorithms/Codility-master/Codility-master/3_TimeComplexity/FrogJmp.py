
# 100% https://app.codility.com/demo/results/training34XJM2-PQU/
def solution(X, Y, D):
    # write your code in Python 3.6
    dis = Y - X
    if  dis % D == 0:
        return dis // D
    else:
       return dis // D + 1






       

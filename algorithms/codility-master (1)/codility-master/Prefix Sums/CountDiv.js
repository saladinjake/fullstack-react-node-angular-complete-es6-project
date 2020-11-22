function solution(A, B, K) {
    let first = (A % K) === 0 ? A :  A + (K - (A % K));
    let last = (B % K) === 0 ? B : B - (B % K);
    return ((last - first) / K) + 1;
}
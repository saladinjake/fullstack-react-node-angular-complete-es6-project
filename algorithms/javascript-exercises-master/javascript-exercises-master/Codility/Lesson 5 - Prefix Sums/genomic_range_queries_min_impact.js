// My solution: https://app.codility.com/demo/results/training84ECWM-9N9/

/* The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting
of N characters. There are M queries, which are given in non-empty arrays P and Q,
each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the
minimal impact factor of nucleotides contained in the DNA sequence between positions
P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:
The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.

Write a function that, given a non-empty zero-indexed string S consisting of N characters
and two non-empty zero-indexed arrays P and Q consisting of M integers, returns an array
consisting of M integers specifying the consecutive answers to all queries.
 */
function solution(S, start, end) {
    // Initialize nucleotide and associated impact factor
    let nucleo_impact = {"A": 1, "C": 2, "G": 3, "T": 4};
    let min_impact_list = [];

    // Run through the queries:
    for (let i = 0; i < start.length; i++) {

        // Run through the subsequences of the sequence S
        // and update minimum impact if smaller than previosu
        let min_impact = 4;
        for (let j = start[i]; j <= end[i]; j++) {
            nucleo = S[j]
            min_impact = Math.min(min_impact, nucleo_impact[nucleo]);
        }
        min_impact_list.push(min_impact);
    }

    return min_impact_list;
}

// 100%

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var impact = {'A': 1,
                'C': 2,
                'G': 3,
                'T': 4
    };
    var N = [];
    var f;
    for (let idx =0; idx < P.length; idx++){
        for ( f in impact){
            if ((S.slice(P[idx],Q[idx]+1).indexOf(f) !== -1)){
                N.push(impact[f]);
                break
            }
        }
            
    }
    return N;
}
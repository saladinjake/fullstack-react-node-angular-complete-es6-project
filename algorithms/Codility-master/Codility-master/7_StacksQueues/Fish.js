// 100%
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let num = A.length;
    if (num<2) return num;
    let alive_fish = [];
    
    for (let i=0; i<num; i++){
        let challenger = i;
        
        while(alive_fish && (B[alive_fish[alive_fish.length -1]] == 1) && B[challenger] == 0){
            let surviver = alive_fish.pop();
            if(A[surviver] > A[challenger]){
                challenger = surviver;
            }
        }
        alive_fish.push(challenger);
    }
    return alive_fish.length;
}

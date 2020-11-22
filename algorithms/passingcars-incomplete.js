function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    //zeroes and 1 arrays

    //task : count passing cars
    let P =A[0]; //east
    let Q = A[1]; //west

    let countingPairs = {
        p: 0,
        q:  1
    }

    let foundOne = false
    let jackpot =[]

    let pairStack =[countingPairs]

    for(let i =0;i<=N;i++){
        if(A[i]==0){
            countingPairs.p =i
            // FIND ALL THE ONES AT THIS INDEX
            let trackSliced = i;
            let pushOnce = true
            const cloneOnes = [].concat(A).slice(i).forEach( function(item,j){
                if(item == 1){
                    //return trackSliced + i
                    //if(pushOnce == true){
                    console.log(trackSliced + j )
                      foundOne = true
                      jackpot.push({
                          PEAST: countingPairs.p,
                          PWEST: trackSliced + j


                        })


                    //return trackSliced + j
                }
            })

            console.log(jackpot,
            //cloneOnes
            )

        }




    }


}

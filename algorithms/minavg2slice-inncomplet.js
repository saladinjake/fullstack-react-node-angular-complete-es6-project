// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let  N = A.length;
    let pairs ={
        p:0,
        q:1,
    //    more: 2
    };

    //what this does is takes an index of a given array loop
    //and an array. just like reduce function it get the sum of
    //of theremaining array after the index + P which is the current iter
    // then return the avg

    let getAllSumAvg = function(A,index){
        let a = [].concat(A);
        console.log(a)
        let P = A[index];
        let Q =   A[index +1] // what is q index then q is not the total length
        //since Q cannot be Accertained

        let divisor =( Q- P ) + 1;
        let remainingArr = a.slice(index+1,index+2)

        if(remainingArr.length>0){
           let sum = P + eval(remainingArr.join("+"))
           let avg = sum/divisor


            console.log('P is: ', P,
            'Rem Array:' ,remainingArr,
            'Q is : ', Q,'A the index ', index, 'Sum is', sum , 'Divisor:', divisor )
            return avg;
        }







    }

    //let initial_sum = (pairs.p + pairs.q)/Math.abs(pairs.p - pairs.q) +1;
    let minAvg = 1;
     let startLocation = 0;
    for(let p=1;p<N-2;p++){
        //when do we get to q
        initial_sum  = getAllSumAvg(A,p);
        // console.log(initial_sum)
        // minAvg = initial_sum
        if(minAvg > initial_sum ){
            console.log(initial_sum +'is my ans')
            console.log(p + "is where the min")
        }
        // console.log(minAvg)

    }
    return minAvg
}

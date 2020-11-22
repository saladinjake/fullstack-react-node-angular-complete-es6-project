function solution(A) {
    let min = 1;
    A.sort(function(a,b){
        // Sort the array explicit way
        return a - b;
    });

    for (var i in A) {
      if (A[i] > -1 && A[i] == min) {
        min++;
      }
    }

    return min;

}


// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let a  = A.sort(function(a,b){return a-b})
//     let N  = a.length
//    // console.log(a)
//     let min = a[0];
//     let next = 0;
//     let lastIter =0;
//     let isConsecutive = false;
//     let loopHole = false
//
//     let checkpoint = []
//     let jackpot ={ 'hit':0 }
//
//      if(N<=1){
//
//         if(a[0]== 1){
//           return a[0] +1
//         }else{
//           return a[0] -1
//         }
//
//      }
//
//       if(N===2){
//           //forwared
//           if(Math.sign(a[0] ) ==-1 && Math.sign(a[1])==-1){
//               return  1
//           }else  if(a[0] + 1 !== a[1] && a[0]!= a[1]){
//
//               return a[0] + 1;
//           }else if(a[0] + 1 == a[1] && a[0]!= a[1]){
//              //backward check
//              return  a[0] - 1;
//
//           }else{
//               return a[1] +1
//           }
//       }
//
//
//     //if(N >2){
//
//     for(let iter = min; iter< a[a.length -1]+1 ;iter++){
//
//              if(a.includes(iter)  ){
//                   loopHole = false;
//                   checkpoint.push(iter) //need vetting
//                   // loophole found before iter ends
//               }else if(!a.includes(iter)){
//                   loopHole = true
//                   jackpot.hit = iter;
//                  console.log(iter + "Not inclusive")
//               }
//      }
//
//     //}//end if
//
//     //console.log(checkpoint)
//
//     if(typeof jackpot !="undefined" || typeof jackpot.hit !=="undefined" && loopHole ==true ){
//          console.log("Not so clean sheet")
//
//
//          if(jackpot.hit ==0){
//
//              if(a[N-2]+1 ==a[N-1]){
//                 return a[N-1] +1
//              }else{
//                  return  a[0] - 1
//              }
//
//          }
//
//           return jackpot.hit
//     }else{
//         console.log("clean sheet")
//     }
//     // console.log(jackpot)
//
//
// }
//
//
// console.log(solution([2,3]))
// console.log(solution([1,2,4,3,5,6,7]))
// console.log(solution([1,2,4,3,5,7]))
// console.log(solution([1,3]))
//
// solution([1,2])


function myFunction(value) {
    return value.length;
}

function solution(N) {

    if(N <= 2){
        return 0;
    }
    
    var num = N.toString(2).replace(/\.?0+$/, '');
    var arrs = num.split('1');
    var zeros = arrs.map(myFunction);
    
    return Math.max(...zeros);
    
}

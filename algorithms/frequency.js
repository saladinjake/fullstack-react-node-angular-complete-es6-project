function(word){
  const w =word.split('');
  const hash ={}

  w.forEach(function(item){
    if(!hash[item]){
      hash[item] = 0;
    }
    hash[item] +=1;
  })

}

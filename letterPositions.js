const letterPositions = function(sentence) {
  const results = {};
  // let index = []
  // logic to update results here
  for (i=0; i< sentence.length; i++){
    if (sentence[i]=== " "){}
    else if (results[sentence[i]]){
      results[sentence[i]].push(i)
    }else {results[sentence[i]]=[i]}
    
  } 
  return results;
};

console.log(letterPositions ("lighthouse in the house"))
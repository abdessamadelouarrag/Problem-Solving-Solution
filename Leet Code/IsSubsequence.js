var isSubsequence = function(s, t) {
    let count = 0;

    for(let i = 0; i < t.length; i++){
          if(s[count] == t[i]){
              count++;
          }
        }
  console.log(count)
    if(count === s.length){
      return true;
    }
    return false;
};
var isPalindrome = function(s) {
  const newSS = s.replace(/[\W_]/g, "").toLowerCase();
  let newS = "";
  for(let i = newSS.length -1; i >= 0; i--){
    newS += newSS[i];
  }
  if(newSS === newS){
    return true;
  }
  else{
    return false
  }
};
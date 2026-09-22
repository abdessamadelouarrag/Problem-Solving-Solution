function romanToInt(s) {
    let intResult = 0;
    const romanN = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
  for(let i = s.length - 1; i >= 0; i--){
    if(romanN[s[i]] < romanN[s[i+1]]){
      intResult -= romanN[s[i]];
    }
    else{
      intResult += romanN[s[i]];
    }
  }
  return intResult;
};

console.log(romanToInt("MCMXCIV"));
// romanToInt("IV");

// "MCMXCIV"
var isValid = function(s) {
    const stack = [];
    const listPar = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    for(let p of s){
        if(listPar[p]){
            stack.push(p);
        }
        else{
            const lastP = stack.pop();
            if(listPar[lastP] !== p) return false
        }
    }
    return stack.length === 0;
}
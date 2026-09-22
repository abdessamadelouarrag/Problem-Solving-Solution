var longestCommonPrefix = function(strs) {
    let cmpar = "";

    if (strs.length === 1) {
        return strs[0];
    }

    if (strs.length === 2) {
        for (let j = 0; j < strs[0].length; j++) {
            if (strs[0][j] === strs[1][j]) {
                cmpar += strs[0][j];
            } else {
                break;
            }
        }

        return cmpar;
    }

    for(let i = 0; i < strs.length - 2; i++){
        for(let j = 0; j < strs[i].length; j++){

            if(
                strs[i][j] === strs[i + 1][j] &&
                strs[i + 1][j] === strs[i + 2][j]
            ){
                cmpar += strs[i][j];
            } else {
                return cmpar;
            }
        }
    }

    return cmpar;
};
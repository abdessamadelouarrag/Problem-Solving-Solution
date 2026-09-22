var addTwoNumbers = function(l1, l2) {
    let newL = "";
    let newL2 = "";
    let newAr = [];

    for(let i = l1.length - 1; i >= 0; i--){
        newL += l1[i];
    }

    for(let i = l2.length - 1; i >= 0; i--){
        newL2 += l2[i];
    }

    let num = Number(newL) + Number(newL2);
    let j = num.toString();

    for(let i = j.length - 1; i >= 0; i--){
        newAr.push(Number(j[i]));
    }

    return newAr;
};
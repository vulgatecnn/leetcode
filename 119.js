var generate = function(numRows) {
    numRows++;
    result1=[1];
    result2=result1;

    if(numRows==0){
        return [];
    }
    if(numRows==1){
        return [[1]];
    }
    for(i=2;i<=numRows;i++){
        result1=[1];
        for(j=2;j<i;j++){
            result1.push(result2[j-2]+result2[j-1]);
        }
        result1.push(1);
        result2=result1.slice(0);

    }
    return result1;

};
console.log(generate(3));
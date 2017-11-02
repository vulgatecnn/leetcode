var plusOne = function(digits) {
    arr=[];
    sum=1;
    for(i=digits.length-1;i>=0;i--){
        sum+=digits[i];
        if(sum>9){
            arr.push((sum%10));
            sum=Math.floor(sum/10);
        }else{
            arr.push(sum);
            sum=Math.floor(sum/10);
        }
    }

    if(sum!=0)
        arr.push(sum);
    return arr.reverse();
};
console.log(plusOne([9]));
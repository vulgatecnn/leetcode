/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    function search(n){
        sum=0;
        while(n>0){
            sum+=(n % 10)*(n%10);
            n=Math.floor(n/10);
        }
        return sum;
    }
    p=search(n);
    arr=[];
    arr.push(p);
    while(true){
        if(p==0){
            return false;
        }
        if(p==1) {
            return true;
        }else{
            p=search(p);

            for(var i=0;i<arr.length;i++){
                if(p==arr[i]){
                    return false;
                }
            }
            arr.push(p);
        }

    }
};
console.log(isHappy(21));
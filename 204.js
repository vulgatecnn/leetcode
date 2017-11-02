/**
 * @param {number} n
 * @return {number}
 */
    var countPrimes1 = function(n) {

        //最快的方式是一边找素数一遍数数

        arr=[2,3];
        p=4;
        count=2;
        while(p<n){
            flag=0;
            for(var i=0;i<arr.length;i++){
                if(p%arr[i]==0){
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                arr.push(p);
                count++;
            }
            p++;
        }
        return count;
    };
    var countPrimes = function(n) {
        if(n<=2){
            return 0;
        }
        arr=Array(n);
        //console.log(arr);
        p=2;
        count=0;
        while(p<n){
            if(arr[p]==undefined){
                count++;
                for(var i=p*2;i<n;i=i+p){
                    arr[i]=1;
                }
            }
            p++;
        }
        return count;
    }
var d=new Date();
startTime=d.getTime();
console.log(countPrimes(4999));
endTime=d.getTime();
intv=endTime-startTime;

console.log(endTime) ;
console.log(startTime);
//test=Array(10);
console.log(countPrimes(4999));
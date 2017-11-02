/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    var arrl=[];
    arr=[];
    candidates.sort(function (a,b){return a>b});

    function search(candidates,target){

        function test11(a,b){
            if(a.length!=b.length){
                return false;

            }
            for(var i=0;i<a.length;i++){
                if(a[i]!=b[i]){
                    return false;
                }
            }
            return true;
        }

        if(target==0){
            arr1=arr.slice(0).sort();
            flag=0
            for(var i=0;i<arrl.length;i++){
                if(test11(arrl[i],arr1)==true){
                    flag=1;
                    break;
                }

            }

            if(flag==0)
                arrl.push(arr1);


            return;
        }
        n=candidates.length;
        for(var i=0;i<candidates.length;i++){

            if(   candidates[i]<=target) {
                arr.push(candidates[i]);
                candidates1=candidates.slice(0);
                candidates1.splice(0,i+1);
                search(candidates1, target - candidates[i]);
                arr.pop();

            }
        }
    }
    search(candidates,target);
    return arrl;
};
console.log(combinationSum([1,3,7],10));
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5],8));
test=[1,2,3,4];
test.splice(0,1);
console.log(test);
console.log(combinationSum([5,4,5,1,5,3,1,4,5,5,4],10));

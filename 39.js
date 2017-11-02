/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    var arrl=[];
    arr=[];
    function search(candidates,target){
        if(target==0){
            arrl.push(arr.slice(0));

            return;
        }
        n=candidates.length;
        for(var i=0;i<n;i++){

            if( (arr.length==0 && candidates[i]<=target) || (arr.length>0 && candidates[i]>=arr[arr.length-1] && candidates[i]<=target)) {
                arr.push(candidates[i]);

                search(candidates, target - candidates[i]);
                arr.pop();

            }
        }
    }
    search(candidates,target);
    return arrl;
};
console.log(combinationSum([2,3,6,7],7));
test=[1,2,3,4];
test1=test.slice(0);
test1.splice(2,1);
console.log(test1);
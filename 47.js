/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort(function (a,b) { return a>b});
    arrl=[];
    arr=[];
    function search(nums){

        if(nums.length==0){
            arrl.push(arr.slice(0));
            return ;
        }
        for(var i=0;i<nums.length;i++){
            if(i>0){
                if(nums[i]==nums[i-1]){
                    continue;
                }
            }

            arr.push(nums[i]);
            n1=nums.slice(0);
            n1.splice(i,1);
            search(n1);
            arr.pop();
        }
    }
    search(nums);
    return arrl;
};
console.log(permuteUnique([1,2,1]));
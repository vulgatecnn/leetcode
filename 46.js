/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    arr=[];
    arrl=[];
    function search(nums){
        if(nums.length==0){
            arrl.push(arr.slice(0));
            return;
        }
        for(var i=0,lens=nums.length;i<lens;i++){
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
console.log(permute([1,2,3]));
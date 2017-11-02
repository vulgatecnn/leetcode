/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    arr_l=[[]];
    n=nums.length;
    arr=[];
    for(var i=1;i<=nums.length;i++){
        search(nums,i);
    }


    function search(nums1,i){
        if(i==1){
            for(var j=0;j<nums1.length;j++){
                //push number to arr
                //  push arr to arr_l
                // pop the arr laster number;

                arr.push(nums1[j]);
                arr_l.push(arr.slice());
                arr.pop();
            }
            return;

        }
        for(var j=0;j<nums1.length-1;j++){
            arr.push(nums1[j]);
            search(nums1.slice(j+1),i-1);
            arr.pop();
        }
    }

    return arr_l;

};

console.log(subsets([1,2,3]));
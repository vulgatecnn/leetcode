var nextPermutation = function(nums) {
    var flag=0;
    for(i=nums.length-1;i>=1;i--){
        if(nums[i]>nums[i-1]){
            p=nums[i];
            nums[i]=nums[i-1];
            nums[i-1]=p;
            flag=1;

        }
    }
    if(flag==0){
        return ;
    }else{
        nums.reverse();
    }
};
p=[1,2];
console.log(p);
nextPermutation(p);
console.log(p);
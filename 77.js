var combine = function(n, k) {
    l=0;
    arr=[];
    arr_l=[];
    m=k;
    function search(n,k){
        if(k==1) {
            for (j = n;j>=1;j--) {
                arr[k - 1] = j;
                arr_l[l] = arr.slice(0);
                l++;
            }
            return ;
        }



        for(var i=n;i>=k;i--) {
            arr[k-1] = i;

            //for (var j = i ; j >= k  ; j--) {

            search(i-1, k - 1);


        }

        //return ;

    }

    search(n,k);
    return arr_l;
};
var subsets = function(nums) {
    l=0;
    arr=[];
    arr_l=[];

    function search(n,k,m){
        if(k==1) {
            for (j = n;j>=1;j--) {
                arr[k - 1] = j;
                arr_l[l] = arr.slice(0);
                l++;
            }
            return ;
        }



        for(var i=n;i>=k;i--) {
            arr[k-1] = i;

            //for (var j = i ; j >= k  ; j--) {

            search(i-1, k - 1);


        }

        //return ;

    }
    for(i=1;i<=nums;i++) {
        arr=[];
        search(nums, i,i);
    }
    return arr_l+[];

}

//console.log(combine(4,4));
console.log(subsets(4));
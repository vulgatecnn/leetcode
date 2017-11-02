var solveNQueens = function(n) {
    arr_l=[];
    arr=[];

    search(0);
    var count=0;
    function search(i){

        if(i==n){
            arr1=[];
            for(var i=0;i<n;i++){
                arr1[i]="";
                for(var j=0;j<n;j++){
                    if(arr[i]==j){
                        arr1[i]+='Q';
                    }else{
                        arr1[i]+='.';
                    }
                }
            }
            arr_l.push(arr1);
            count++;
            return ;
        }

        for(var j=0;j<n;j++){
            flag=0;
            arr[i]=j;
            for(var k=0;k<i;k++){
                if(arr[k]==j || Math.abs(k-i)==Math.abs(arr[k]-arr[i]) ){
                    flag=1;
                    break;
                }
            }
            if(flag==0){

                search(i+1);
            }
        }
    }
    return arr_l.length;
};
console.log(solveNQueens(5));
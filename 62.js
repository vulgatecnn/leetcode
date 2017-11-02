var uniquePaths = function(m, n) {
    var re1= new Array();

    for(var i=0;i<n;i++){
        re1[i]=new Array();
        for(var j=0;j<m;j++){
            if(j==0 || i==0){
                re1[i][j]=1;
            }else{
                re1[i][j]=re1[i-1][j]+re1[i][j-1];
            }
        }
    }
    return re1[n-1][m-1];
};
console.log(uniquePaths(9,9));
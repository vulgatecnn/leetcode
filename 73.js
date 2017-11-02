var setZeroes = function(matrix) {
    n=matrix.length;
    m=matrix[0].length;
    n1=[];
    m1=[]
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            if(matrix[i][j]==0 && n1[i]==undefined){
                n1[i]=0;
            }
            if(matrix[i][j]==0 && m1[j]==undefined){
                m1[j]=0;
            }

        }
    }
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            if(n1[i]!=undefined || m1[j]!=undefined){
                matrix[i][j]=0;
            }
        }
    }
    //console.log(matrix);
    return ;
};

setZeroes([[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]);
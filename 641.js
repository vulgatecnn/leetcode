/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //dianx xianx daishu
    n=grid.length;
    m=grid[0].length;
    var arr=[];
    var result =0;
    if(n==1){
        for(i=0;i<m;i++){
            result+=grid[0][i];

        }
        return result;
    }
    for(i=0;i<n;i++){
        arr[i]=[];
        for(j=0;j<m;j++){
            if(i==0 && j==0){
                arr[i][j]=grid[i][j];
                continue;
            }
            if(i==0){
                arr[i][j]=arr[i][j-1]+grid[i][j];
                continue;
            }
            if(j==0){
                arr[i][j]=arr[i-1][j]+grid[i][j];
                continue;

            }
            arr[i][j]=Math.min(arr[i][j-1],arr[i-1][j])+grid[i][j];
        }
    }
    return arr[n-1][m-1];

    function search(i,j){
        if(i==0 && j==0){
            return grid[i][j];
        }
        if(i==0){
            result=0;
            for(p=0;p<=j;p++)
                result+=grid[0][p];

            return result;
        }
        if(j==0){
            result=0;
            for(p=0;p<=i;p++)
                result+=grid[p][j];

            return result;
        }
        if(i != 0 && j!=0){
            return Math.min(search(i-1,j)+grid[i][j],search(i,j-1)+grid[i][j]);
        }
    }
    return search(n-1,m-1);

};

var minPathSum1 = function(grid) {
    n=grid.length;
    m=grid[0].length;
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            if(i==0 && j==0){
                continue;
            }
            if(i==0){
                grid[i][j]+=grid[i][j-1];
                continue;
            }
            if(j==0){
                grid[i][j]+=grid[i-1][j];
                continue;
            }
            if(i!=0 && j!=0){
                grid[i][j]+=grid[i][j-1]>grid[i-1][j]?grid[i-1][j]:grid[i][j-1];
            }
        }
    }
    return grid[n-1][m-1];
}

//console.log(minPathSum([[0]]));
//console.log(minPathSum([[1,2],[1,1]]));
console.log(minPathSum1([[1,2],[1,1]]));

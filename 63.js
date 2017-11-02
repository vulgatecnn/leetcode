var uniquePathsWithObstacles = function(obstacleGrid) {


    n=obstacleGrid.length;
    m=obstacleGrid[0].length;

    if(obstacleGrid[0][0]==1 || obstacleGrid[n-1][m-1]==1 ){
        return 0;
    }
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            if(i==0 || j==0 ){
                if(obstacleGrid[i][j]!=1) {
                    if (i == 0 && j > 0 && ( obstacleGrid[i][j - 1] == 1 || obstacleGrid[i][j - 1] == 0) ) {
                        obstacleGrid[i][j] = 0;

                    } else if (j == 0 && i > 0 && ( obstacleGrid[i - 1][j] == 1 || obstacleGrid[i-1][j ] == 0) ){
                        obstacleGrid[i][j] = 0;

                    } else{
                        obstacleGrid[i][j] = -1;
                    }
                }
            }else{
                if(obstacleGrid[i][j]!=1){
                    obstacleGrid[i][j]=(obstacleGrid[i-1][j]==1?0:obstacleGrid[i-1][j])+(obstacleGrid[i][j-1]==1?0:obstacleGrid[i][j-1]);
                }
            }
        }
    }
    return Math.abs(obstacleGrid[i-1][j-1]==1?0:-obstacleGrid[i-1][j-1]);
};
console.log(uniquePathsWithObstacles([[0]]));

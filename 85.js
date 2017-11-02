/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    max=0;
    m=matrix.length;
    n=matrix[0].length;

    function full1(i,j,i1,j1){
        count=0;
        for(p=i;p<=i1;p++){
            for(p1=j;p1<=j1;p1++){
                if(matrix[p][p1]=="1"){
                    count++;
                }else{
                    return 0;
                }
            }
        }
        return count;
    }
    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(matrix[i][j]=="0"){
                continue;
            }
            for(i1=i+1;i1<m;i1++){
                for(j1=j+1;j1<n;j1++){
                    if(matrix[i1][j1]=="0"){
                        continue;
                    }
                    if(full1(i,j,i1,j1)>max){
                        max=full1(i,j,i1,j1);
                    }

                }
            }
        }
    }
    return max;
};
console.log([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
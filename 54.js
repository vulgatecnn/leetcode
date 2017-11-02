var spiralOrder = function(matrix) {

    var n=matrix.length;


    var arr=[];
    for(i=0;i<n/2;i++){
        for(j=0;j<n-i;j++){
            arr.push(matrix[i][i+j]);
        }
        for(j=1;j<n-i-1;j++){
            arr.push(matrix[j][n-i]);
        }
        for(j=1;j<n-i;j++){
            arr.push(matrix[n-i][n-j]);
        }
        for(j=1;j<n-i;j++){
            arr.push(matrix[n-j+1][n-i]);
        }


    }
    return arr;

};
console.log(spiralOrder([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]));
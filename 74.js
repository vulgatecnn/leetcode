var searchMatrix = function(matrix, target) {
    i1=j1=0;
    if(matrix.length==0){
        return false;
    }

    j2=matrix[0].length-1;
    i2=matrix.length-1;

    while(i1<i2){
        if(matrix[Math.floor((i1+i2)/2)][0])==target){
            return true;
        }
        if(matrix[Math.floor((i1+i2)/2)][0])>target){
            i2=Math.floor((i1+i2)/2);
        }
    }



    if(matrix[i1][j1]==target || matrix[i2][j2]==target){
        return true;
    }else{
        return false;
    }
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],3));
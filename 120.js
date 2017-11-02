/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    result1=triangle[0].slice(0);
    result2=result1.slice(0);
    min=triangle[0][0];
    for(var i=1;i<triangle.length;i++){
        result2[0]=result1[0]+triangle[i][0];
        min=result2[0];

        for(var j=1;j<triangle[i].length-1;j++){
            if(result1[j-1] > result1[j]){
                result2[j]=result1[j]+triangle[i][j];
            }else{
                result2[j]=result1[j-1]+triangle[i][j];
            }
            if(result2[j]<min){
                min=result2[j];
            }

        }
        result2.push(result1[result1.length-1]+triangle[i][triangle[i].length-1]);
        if(result2[result2.length-1]<min){
            min=result2[result2.length-1];
        }
        result1=result2.slice(0);
    }
    return min;
};
console.log(minimumTotal([[1],[1,2],[10,3,4]]));
console.log(minimumTotal([[-1],[-2,-3]]));
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]));
console.log(minimumTotal([[-1],[3,2],[1,-2,-1]]));
/**
 * @param {character[][]} grid
 * @return {number}
 */

var numislands1 = function(grid){
    //深度优先
    arrl=[];
    count=0;
    n=grid.length;
    if(n==0){
        return 0;
    }
    m=grid[0].length;
    for(var i=0;i<n;i++) {
        arrl[i]=[];
        for(var j=0;j<m;j++){
            arrl[i][j]=0;
        }
    }
    function check(i,j){
        if(i<n && i>=0 && j>=0 && j<m  ){
            return true;
        }else{
            return false;
        }
    }
    function search(i,j,p){
        if(check(i-1,j) && grid[i-1][j]=='1' && arrl[i-1][j]==0 ){
            arrl[i-1][j]=p;
            search(i-1,j,p);
        }
        if(check(i,j-1) && grid[i][j-1]=='1' && arrl[i][j-1]==0 ){
            arrl[i][j-1]=p;
            search(i,j-1,p);
        }
        if(check(i+1,j) && grid[i+1][j]=='1' && arrl[i+1][j]==0 ){
            arrl[i+1][j]=p;
            search(i+1,j,p);
        }
        if(check(i,j+1) && grid[i][j+1]=='1' && arrl[i][j+1]==0 ){
            arrl[i][j+1]=p;
            search(i,j+1,p);
        }
    }
    for(var i=0;i<grid.length;i++){

        for(var j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1'  &&  arrl[i][j]==0){
                count++;
                arrl[i][j]=count;
                search(i,j,count);
            }
        }
    }
    return count;
};


var numIslands = function(grid) {
    count=0;
    arrl=[];
    arr=[];
    for(var i=0;i<grid.length;i++){
        arrl[i]=[];
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]==0){
                continue;
            }
            // i=0 and j=0
            if(i==0 && j==0 && grid[i][j]=='1'){
                count++;
                arrl[i][j]=count;
                continue;
            }
            //i =0
            if(i==0){
                if(grid[i][j-1]=='1' && grid[i][j]=='1'){
                    arrl[i][j]=arrl[i][j-1];
                    continue;
                }
                if(grid[i][j-1]=='0' && grid[i][j]=='1'){
                    count++;
                    arrl[i][j]=count;
                    continue;
                }

            }
            if(j==0){
                //第一个数据
                if(grid[i][j]=='1' && grid[i-1][j]=='1'){
                    arrl[i][j]=arrl[i-1][j];
                    continue;
                }
                if(grid[i][j]=='1' && grid[i-1][j]=='0'){
                    count++;
                    arrl[i][j]=count;
                    continue;
                }

            }
            if(i>0 && j>0){
                //现在是1， 上面是1，左边是1 但是相同

                if(grid[i][j]=='1' && grid[i][j-1]=='1' && grid[i-1][j]=='1' && arrl[i][j-1]==arrl[i-1][j]){

                    arrl[i][j]=arrl[i-1][j];
                    continue;
                }

                //现在是1， 上面是1，左边是1 但是不同

                if(grid[i][j]=='1' && grid[i][j-1]=='1' && grid[i-1][j]=='1' && arrl[i][j-1]!=arrl[i-1][j]){

                    arrl[i][j]=arrl[i][j-1];
                    p=[];
                    if(arrl[i][j-1]>arrl[i-1][j]){
                        p=[arrl[i][j-1],arrl[i-1][j]];
                    }else{
                        p=[arrl[i-1][j],arrl[i][j-1]];
                    }
                    flag=0;
                    for(var ii=0;ii<arr.length;ii++){
                        if(arr[ii][0]==p[0] && arr[ii][1]==p[1]){
                            flag=1;
                            break;
                        }
                    }
                    if(flag==1){
                      ;
                    }else{
                        arr.push(p);
                        count--;

                    }

                    continue;
                }

                // 现在是1，上面是0，左边是0
                if(grid[i][j]=='1' && grid[i][j-1]=='0' && grid[i-1][j]=='0'){
                    count++;
                    arrl[i][j]=count;
                    continue;
                }
                //现在是1，上面是1，左边是0
                if(grid[i][j]=='1' && grid[i][j-1]=='0' && grid[i-1][j]=='1'){

                    arrl[i][j]=arrl[i-1][j];
                    continue;
                }
                //现在是1，上面是0，左边是1
                if(grid[i][j]=='1' && grid[i][j-1]=='1' && grid[i-1][j]=='0'){

                    arrl[i][j]=arrl[i][j-1];
                    continue;
                }
            }
        }
    }
    for(var i=0;i<arrl.length;i++){
        for(var j=0;j<arrl[0].length;j++){
            if(arrl[i][j]==undefined){
                arrl[i][j]=0;
            }
        }
    }
    return count;
};
console.log(numislands1([["1","1","1","1","0"],
                        ["1","1","0","1","0"],
                        ["1","1","0","0","0"],
                        ["0","0","0","0","0"]]));
console.log(arrl);
console.log('test');
console.log(numIslands([["1","1","1","1","1","1","1"],
                        ["0","0","0","0","0","0","1"],
                        ["1","1","1","1","1","0","1"],
                        ["1","0","0","0","1","0","1"],
                        ["1","0","1","0","1","0","1"],
                        ["1","0","1","1","1","0","1"],
                        ["1","1","1","1","1","1","1"]]));

console.log(arrl);
console.log(numIslands([["0","1","0","0","1","1","1","0","0","0","0","0","1","0","0","0","0","1","0","1"],["1","0","1","0","0","1","1","0","0","1","0","1","0","1","0","1","1","0","0","0"],["0","1","0","0","0","1","1","1","1","0","0","0","0","0","1","1","1","1","0","1"],["1","1","0","0","0","1","1","0","0","0","1","1","1","0","0","1","0","1","1","0"],["0","1","0","1","1","0","1","0","0","0","1","0","0","1","0","0","0","0","0","1"],["1","0","0","1","0","1","0","0","0","1","1","0","1","0","0","1","0","0","0","0"],["1","0","0","0","1","1","0","0","0","0","0","1","0","0","1","0","0","0","0","1"],["1","0","0","0","1","0","1","1","1","0","1","0","1","1","1","1","0","0","0","1"],["1","0","0","1","0","0","0","1","0","0","0","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","1","1","1","1","1","1","1","1","1","0","0","0","0","1","0"],["1","0","1","0","1","0","0","1","1","1","0","1","1","0","0","1","1","0","0","0"],["0","1","0","0","1","0","0","0","0","0","0","1","1","1","1","0","0","0","1","0"],["1","0","0","0","1","1","1","0","1","0","0","0","1","0","1","0","1","0","0","1"],["0","0","0","0","1","0","1","1","0","1","0","1","0","1","1","1","1","0","0","0"],["0","1","1","0","0","0","0","1","0","0","1","1","1","0","0","1","1","0","1","0"],["1","0","1","1","1","1","1","1","0","1","1","0","1","0","0","1","0","0","0","1"],["1","0","0","0","1","0","1","0","0","1","0","1","0","0","1","0","0","1","1","1"],["0","0","1","0","0","0","0","1","0","0","1","1","0","1","1","1","0","0","0","0"],["0","0","1","0","0","0","0","0","0","1","1","0","1","0","1","0","0","0","1","1"],["1","0","0","0","1","0","1","1","1","0","0","1","0","1","0","1","1","0","0","0"]]));
console.log(numislands1([["0","1","0","0","1","1","1","0","0","0","0","0","1","0","0","0","0","1","0","1"],["1","0","1","0","0","1","1","0","0","1","0","1","0","1","0","1","1","0","0","0"],["0","1","0","0","0","1","1","1","1","0","0","0","0","0","1","1","1","1","0","1"],["1","1","0","0","0","1","1","0","0","0","1","1","1","0","0","1","0","1","1","0"],["0","1","0","1","1","0","1","0","0","0","1","0","0","1","0","0","0","0","0","1"],["1","0","0","1","0","1","0","0","0","1","1","0","1","0","0","1","0","0","0","0"],["1","0","0","0","1","1","0","0","0","0","0","1","0","0","1","0","0","0","0","1"],["1","0","0","0","1","0","1","1","1","0","1","0","1","1","1","1","0","0","0","1"],["1","0","0","1","0","0","0","1","0","0","0","0","0","0","0","0","0","1","0","1"],["0","0","0","1","0","1","1","1","1","1","1","1","1","1","0","0","0","0","1","0"],["1","0","1","0","1","0","0","1","1","1","0","1","1","0","0","1","1","0","0","0"],["0","1","0","0","1","0","0","0","0","0","0","1","1","1","1","0","0","0","1","0"],["1","0","0","0","1","1","1","0","1","0","0","0","1","0","1","0","1","0","0","1"],["0","0","0","0","1","0","1","1","0","1","0","1","0","1","1","1","1","0","0","0"],["0","1","1","0","0","0","0","1","0","0","1","1","1","0","0","1","1","0","1","0"],["1","0","1","1","1","1","1","1","0","1","1","0","1","0","0","1","0","0","0","1"],["1","0","0","0","1","0","1","0","0","1","0","1","0","0","1","0","0","1","1","1"],["0","0","1","0","0","0","0","1","0","0","1","1","0","1","1","1","0","0","0","0"],["0","0","1","0","0","0","0","0","0","1","1","0","1","0","1","0","0","0","1","1"],["1","0","0","0","1","0","1","1","1","0","0","1","0","1","0","1","1","0","0","0"]]));
console.log(arrl);

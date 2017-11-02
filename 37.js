var solveSudoku = function(board) {

    var result=[];

    var base=0;
    var count1=0;
    for(var i=0;i<9;i++) {
        result[i]=[];
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                base++;
                result[i][j]=0;
            }else{
                result[i][j] = parseInt(board[i][j]);
            }
        }
    }
    console.log(result);
    count1=base;
    function check(i,j,x){
        for(var ii=0;ii<9;ii++){
            if((result[ii][j])==x ||  (result[j][ii])==x){
                return false;
            }
        }
        //search 3X3 block
        // if 3x3 block then return;
        var ii=Math.floor(i/3);
        var jj=Math.floor(j/3);
        for(var iii=0;iii<3;iii++)
            for(var jjj=0;jjj<3;jjj++){
                if( (board[ii+iii][jj+jjj])==x){
                    return false;
                }
            }
        return true;
    }
    function search(ii,jj,n){
            if(n==78){
                return true;
            }
            for(var i=0;i<9;i++)
                for(var j=0;j<9;j++){
                    if(result[i][j]==0) {
                        for (var k = 1; k <= 9; k++)
                            if ( check(i, j, k) == true) {
                                result[i][j] = k;
                                if (search(n+1) == true)
                                    return true;

                                result[i][j] = 0;
                            }
                    }
                }
            return false;
    }
    if(search(base+1)==false){
        return false;
    };
    return result;
};
console.log(solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]));
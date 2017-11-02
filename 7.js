var exist1 = function(board, word) {
    var dict=[];
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(dict[board[i][j]]===undefined){
                dict[board[i][j]]=1;
            }else{
                dict[board[i][j]]++;
            }
        }
    }
    for(var i=0;i<word.length;i++){
        if(dict[word[i]]==0 || dict[word[i]]==undefined){
            return false;
        }else{
            dict[word[i]]--;
        }
    }
    return true;
};


var exist = function(board, word) {
    n=board.length;
    m=board[0].length;
    word_p=0;
    word_l=word.length-1;
    function search(i,j,word,word_p){
         {
            if (word_p == word_l) {
                return true;
            }
            pp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
            for (var k = 0; k < pp.length; k++) {
                if (board[(i + pp[k][0]) % n][(j + pp[k][1]) % m] == word[word_p]) {
                    if (search((i + pp[k][0]) % n, (j + pp[k][1]) % m, word, word_p + 1) == true) {
                        return true;
                    }
                }
            }
            return false;
        }

    }
    for(var i=0;i<board.length;i++)
        for(var j=0;j<board[i].length;j++){
            if(board[i][j]==word[0]){
                if(search(i,j,word,1)==true){
                    return true;
                }
            }
        }
    return false;

};


console.log(exist([["a","b"],["c","d"]],"abcdse"));
console.log(exist([["a","b"],["a","a"]],"a"));
console.log(exist([["F","Y","C","E","N","R","D"],["K","L","N","F","I","N","U"],["A","A","A","R","A","H","R"],["N","D","K","L","P","N","E"],["A","L","A","N","S","A","P"],["O","O","G","O","T","P","N"],["H","P","O","L","A","N","O"]],"POLAND"));
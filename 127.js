/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    n = wordList.length;
    arr = [];
    if (search(beginWord, endWord, wordList) == true){
        //console.log(arr);
        return arr.length+1;
    }else{
        return 0;
    }
    function diff1(w1,w2){
        n=w1.length;
        flag=0;

        for(var i=0;i<n;i++){
            if(w1.slice(i,i+1)!=w2.slice(i,i+1)){
                flag++;
            }
        }
        if(flag==1){
            return true;
        }else{
            return false;
        }
    }
    function search(beginWord,endWord,wordList) {

        if(beginWord==endWord){
            return true;
        }

        for ( i = 0; i < wordList.length; i++) {
            if (diff1(beginWord, wordList[i]) == true) {
                arr.push(wordList[i]);
                wordList1=[];
                for( j=0;j<wordList.length;j++){
                    if(i!=j){
                        test=wordList[j];
                        wordList1.push(test);
                    }
                }

                if(search(wordList[i],endWord,wordList1)==true)
                    return true;
                arr.pop();
            }
        }
        return false;
    }

};
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"]));
test=[];
test.push(1);
test.push(2);
console.log(test);
//console.log(ladderLength("hot",'dog',['hot','dog']));
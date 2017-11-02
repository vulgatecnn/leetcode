/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    /*
    convert word1 to word2

    if(word2.indexOf(word1)>=0){



    */


    if(word2.indexOf(word1)>=0)  {
        return word2 . length-word1 . length  ;

    }
    var max=word2.length>word1.length?word2.length:word1.length;
    var w2=w2.length;
    var w1=w1.length;
    var count=0;
    function search1(i,j){
        for(ii==i;ii<w1;ii++){
            for(jj=j;jj<w2;jj++){
                if(word1[ii]==word2[jj]){
                    
                }
            }
        }
        return Math.min(search(i))
    }
    function search(i,j){
        //if too deep ,then return;
        if(count>=max){
            return;
        }
        //if search to end of word2, then return
        if(j==word2.length) {
            if (count + word1.length - i  < max) {
                max = count + word1.length - i ;
                console.log(i,j,max);
            }
            return ;
        }

        //if search to end of word1 ,the return
        if(i==word1.length){
            if(count+word2.length-j< max) {
                max = count + word2.length - j ;
                console.log(i,j,max);
            }
            return ;
        }
        while(word1[i]==word2[j]) {

            i++;
            j++;

        }
        // insert the word2[j]
        count++;
        search(i, j + 1);
        count--;
        //delete word2[j];
        count++;
        search(i + 1, j);
        count--;
        //replace word1
        count++;
        search(i + 1, j + 1);
        count--;

    }

    search(0,0,0);

    return max;

};
console.log(minDistance("abcc","abc"));
console.log(minDistance("trinitrophenylmethylnitramine","dinitrophenylhydrazine"));

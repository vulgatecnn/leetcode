/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    return search(s1,s2,s3);
    function search(s1,s2,s3){
        var ss1="",ss2="",ss3="";
        if(s1.length==0 && s2.length==0 && s3.length==0){
            return true;
        }

        if(s1.length>0){
            if(s1[0]==s3[0]){

                ss1=s1.slice(0);
                ss1=ss1.substr(1);

                ss3=s3.slice(0);
                ss3=ss3.substr(1);
                if(search(ss1,s2,ss3)) {
                    return true;
                }
            }
        }

        if(s2.length>0){
            if(s2[0]==s3[0]){
                ss2=s2.slice(0);
                ss2=ss2.substr(1);
                ss3=s3.slice(0);
                ss3=ss3.substr(1);
                if(search(s1,ss2,ss3)) {
                    return true;
                }
            }
        }
        return false;
    }
};

var isInterleave1 = function(s1, s2, s3) {
    var d=[];
    if(s1.length==0){
        return s2==s3;
    }

    if(s2.length==0) {
        return s1 == s3;
    }

    if(s1.length+s2.length!=s3.length){
        return false;
    }


    for(var i=0;i<s1.length+1;i++){
        for(var j=0;j<s2.length+1;j++){

            arrl[i][j]=(arrl[i-1][j] && (s1[i-1]==s3[i+j-1])) || (arrl[i][j-1] && (s2[i-1]==s3[i+j-1]));
        }
    }
    return arrl[s1.length][s2.length];

}
console.log(isInterleave("aabcc","dbbca","aadbbcbcac"));
console.log(isInterleave("aabcc","dbbca","aadbbbaccc"));
console.log(isInterleave1("aabcc","dbbca","aadbbbaccc"));
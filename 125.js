/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    i=0;
    j=s.length-1;
    s=s.toLocaleLowerCase();
    while(i<j){
        if(!(s[i].charCodeAt()<='z'.charCodeAt() && s[i].charCodeAt()>='a'.charCodeAt() || (s[i].charCodeAt()<='9'.charCodeAt() && s[i].charCodeAt()>='0'.charCodeAt()))){
            i++;
            continue;
        }
        if(!(s[j].charCodeAt()<='z'.charCodeAt() && s[j].charCodeAt()>='a'.charCodeAt() || (s[j].charCodeAt()<='9'.charCodeAt() && s[j].charCodeAt()>='0'.charCodeAt()))){
            j--;
            continue;
        }

        if(s[i]!=s[j]){
            return false;
        }else{
            i++;
            j--;
        }
    }
    if(s[i]==s[j]){
        return true;
    }else{
        return false;
    }
};

function isPalindrome1(s) {
    s=s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    i=0;
    j=s.length-1;
    while(i<=j){
        if(s.charAt(i)!=s.charAt(j)){
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
};

 var isPalindrome2 = function(s){
    return s;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome('0P'));
console.log(isPalindrome1('sia87asaf asdfas'));
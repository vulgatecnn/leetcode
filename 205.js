/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    len_s=s.length;
    dict1=new Array();
    dict2=new Array();

    for(var i=0;i<len_s;i++ ){
        if(dict1[s[i]]==undefined && dict2[t[i]]==undefined){
            dict1[s[i]]=t[i];
            dict2[t[i]]=s[i];
            continue;
        }
        if(dict1[s[i]]!=t[i] || dict2[t[i]]!=s[i]){
            return false;
        }

    }
    return true;

};
console.log(isIsomorphic('ab','aa'));
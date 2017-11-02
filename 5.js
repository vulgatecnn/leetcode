var strStr = function(haystack, needle) {
    if(needle==''){
        return 0;
    }
    if(haystack.length<needle.length || (haystack.length==0 && needle.length!=0)){
        return -1;
    }


    for(var i=0;i<haystack.length;i++){
        var flag=0;
        for( var j=0;j<needle.length;j++){
            if(haystack[i+j]!=needle[j]){
                flag=1;
                break;

            }
        }
        if(flag==0){
            return i;
        }
    }
    return -1;
};
console.log(strStr("mississippi","mississippi"));
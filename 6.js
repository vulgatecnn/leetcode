var longestPalindrome = function(s) {
    if(s.length==1){
        return s;
    }
    max=0;
    maxi=0;
    maxj=0;
    for(var j=s.length-1;j>0;j--){

        for(var i=0;(i+max-1)<j;i++){
            if((j-i+1)<max){
                return s.slice(maxi,maxj+1);
            }

            i1=i;
            j1=j;
            while(s[i1]==s[j1] && i1<j1){
                i1++;
                j1--;
            }
            if( (i1==j1 || i1==j1+1) && j-i+1>max){
                max=j-i+1;
                maxi=i;
                maxj=j;
                x=1;
            }
        }
    }
    return s.slice(maxi,maxj+1);

};

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
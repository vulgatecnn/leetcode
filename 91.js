/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    function search(s1){
        if(s1.length==0){
            return 0;
        }
        if(s1.length==1){


            if(parseInt(s1)>0){
                return 1;
            }else if(parseInt(s1)==0){
                return 0;
            }
        }

        if(s1.length==2){
            if(s1[0]=='0'){
                return 0;
            }
            switch (parseInt(s1)){
                case 0:
                    return 0;
                case 10:
                case 20:
                    return 1;
                default:
                    if(s1[1]=='0'){
                        return 0;
                    }
                    if(parseInt(s1)>26){
                        return 1;
                    }else{
                        return 2;
                    }
            }
        }


        if(s1.length>2){
            //ab if ab==00
            //      ab==10
            //      ab==20
            //      ab>
            if(s1[0]=='0'){
                return 0;
            }
            switch (parseInt(s1.slice(0,2))){
                case 0:
                    return 0;
                case 10:
                case 20:
                    return search(s1.slice(2));
                default:
                    if(s1[1]=='0'){
                        return 0;
                    }
                    if(parseInt(s1.slice(0,2))<=26){

                        return search(s1.slice(1))+search(s1.slice(2));
                    }else{
                        return search(s1.slice(1));
                    }
            }

        }


    }

    function search2(s){
        a=0;
        b=0;
        n=p=s.length;
        
        while(p>)
    }
    return search(s);
};

console.log(numDecodings('611'));
console.log(numDecodings("9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253"))
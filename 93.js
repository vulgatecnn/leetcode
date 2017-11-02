/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    /*
    search(s,n)
    n表示找第几个了

    if n==4

       if paseIn (s[0]!='0' && pases[]<=255:
            arr[n]=s;
          arrl.push(arr.join('.');
           return
       else
           return ;

     else{
        if(s[0]=='0')
             return
        else
            arr[n]=s[0];
            search(s.slice(1),n+1);
        // cut 2
        arr[n]=s.slice(0,1);
        search(s.slice(2),n+1);

        //cut 3

        if(<255)
            arr[n]=slice(0,2)
            search(s.slic(3,n+1)






    */
    arr=[];
    arrl=[];

    function search(s,n){
        if(n==4){
            if(s.length==0){
                return;
            }
            if(parseInt(s[0])=='0' && s.length==1){
                arr[n-1]=s;
                arrl.push(arr.join('.'));
                return;
            }

            if(parseInt(s[0])!=0 && parseInt(s)<=255) {

                arr[n - 1] = s;
                arrl.push(arr.join('.'));
                return;

            }

        }else{
            //cut 1
            if (s[0] == '0') {
                arr[n - 1] = s[0];
                search(s.slice(1), n + 1);
            }
                //cut 2
            if(s[0]!='0') {
                arr[n - 1] = s[0];
                search(s.slice(1), n + 1);
                arr[n - 1] = s.slice(0, 2);
                search(s.slice(2), n + 1);

                //cut 3
                if (parseInt(s.slice(0, 3)) <= 255) {
                    arr[n - 1] = s.slice(0, 3);
                    search(s.slice(3), n + 1);
                }

            }
        }



    }

    re=/^\d{1,}$/;
    if(re.test(s)==false){
        return [];
    }

    search(s,1);
    return arrl;
};
console.log(restoreIpAddresses("010010"));
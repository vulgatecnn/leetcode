var p=0;
/*
function test1(a,b,arr_l,arr){

    if(a==b && a==0){
        arr_l[p]=arr;
        arr=[];
        p++;
        return;
    }
    if(a-1>=0) {
        arr=arr+'a';
        test1(a-1,b,arr_l,arr);
        arr=arr.slice(0,arr.length-1);

    }

    if((b-1)>=a){
        arr=arr+'b';
        test1(a,b-1,arr_l,arr);
        arr=arr.slice(0,arr.length-1);
    }
    return ;
}
*/

var arr_l=[];
var arr=[];
var p=0;
function test2(a,b){

    if(a==b && a==0){
        arr_l[p]=arr;

        p++;
        return;
    }
    if(a-1>=0) {
        arr=arr+'a';
        test2(a-1,b);
        arr=arr.slice(0,arr.length-1);

    }

    if((b-1)>=a){
        arr=arr+'b';
        test2(a,b-1);
        arr=arr.slice(0,arr.length-1);
    }
    return ;
}



//test1(3,3,arr,[]);
test2(3,3)
console.log(arr_l);
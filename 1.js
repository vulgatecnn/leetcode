var mergeTwoLists = function(l1, l2) {
    if(l1==null ){
        return l2;
    }
    if(l2==null){
        return  l1;
    }
    var  l3=[];
    while(l1.length!=0 && l2.length!=0){

        if(l1[0]<l2[0]){
            l3.push(l1[0]);
            l1.shift(0);
        }else{
            l3.push(l2[0]);
            l2.shift(0);
        }

    }
    while(l1.length!=0){
        l3.push(l1[0]);
        l1.shift(0);
    }

    while(l2.length!=0){
        l3.push(l2[0]);
        l2.shift(0);
    }

    return l3;
};

console.log(mergeTwoLists([5],[1,2,4]));
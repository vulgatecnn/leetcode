/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    str_num1 = [];
    str_num2 = [];
    add1=[0];

    result=[0];

    jin=0;
    num1_len=num1.length;
    num2_len=num2.length;
    for (var i = num1.length-1; i>=0; i--) {
        add1=[];
        for (var j = num2.length-1; j >=0; j--) {
            product+=parseInt(num1.slice(i,i+1))*parseInt(num2.slice(j,j+1));
            add1.push(product%10);
            product=Math.floor(product/10);
        }
        while()
    }
    //console.log(str_num1,str_num2);



};

multiply('123445','123443');
/**
 * @param {string} s
 * @return {number}
 */
var calculate1 = function(s) {
    return eval(s);

};

var calculate = function(s) {
    result=0;
    arr=[];
    for(i=0;i<s.length;i++){

    }
    var calculate = function(s) {
        s = s.trim();
        var n = s.length;
        var i = 0;
        var stack = [];
        while (i < n) {
            if (s[i] === ')') {
                stack.push(helper(stack));
            } else {
                stack.push(s[i]);
            }
            i++;
        }
        return helper(stack);
    };

    function helper(stack) {
        var result = 0;
        var prev = "";
        while (stack.length > 0) {
            var p = stack.pop();
            if (p === "(") {
                break;
            } if (p === "+") {
                result = result + parseInt(prev);
                prev = "";
            } else if (p === "-") {
                result = result - parseInt(prev);
                prev = "";
            } else {
                prev = p + prev;
            }
        }
        result += parseInt(prev);
        return result;
    }
};


console.log(calculate("1+2+3"));
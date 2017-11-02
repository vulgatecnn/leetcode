var lengthOfLastWord = function(s) {

    return s.trim().split(' ').pop().length;

};
console.log(lengthOfLastWord('hello world'));
console.log(lengthOfLastWord('a abc '));
console.log(lengthOfLastWord(''));
console.log(lengthOfLastWord(' '));
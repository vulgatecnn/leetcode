
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    arr=path.split('/');
    arr1=[];
    for(var i=0;i<arr.length;i++){
        switch (arr[i]){
            case '':
                break;
            case '.':
                break;
            case '..':
                if(arr1.length>0){
                    arr1.pop();
                }
                break;
            case '/':
                break;
            default:
                arr1.push(arr[i]);
        }
    }
    return "/"+arr1.join("/");
};
console.log(simplifyPath("////a/./b/../../c/"));
console.log(simplifyPath('/home//foo/'));

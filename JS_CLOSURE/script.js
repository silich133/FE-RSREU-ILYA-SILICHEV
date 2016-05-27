/*1.Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array(qwe));
console.log(is_array([1, 2, 4, 0]));
false
true
*/
function checkInput(_arr) {
return _arr instanceof Array;
}

//6.Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method

function sort(_arr) {
function compareTitle(obj1, obj2) {
return obj1.title - obj2.title;
}

this.sort(compareTitle);
for (var i = 0; i < _arr.length; i++) {
console.log(_arr[i].title);
}
}

//15. Write a JavaScript program to get the length of an JavaScript object

function lengthObject(_arr) {
var size = 0;

for (var key in _arr) {
if (this.hasOwnProperty(key)) {
size++;
}
}
return size;
};
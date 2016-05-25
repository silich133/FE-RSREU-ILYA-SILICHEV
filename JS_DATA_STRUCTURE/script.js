var now = new Date();

var optionDay = {
	weekday: 'long'
};

console.log("Today is " + now.toLocaleString("en", optionDay));

var optionData = {
	day: "numeric",
	month: "long"
};

console.log("Today is " + now.toLocaleString("en", optionData));

for (var year = 2014; year <= 2050; year++)  
    {  
    var d = new Date(year, 0, 1);  
    if ( d.getDay() === 0 )  
        console.log("1st January on Sunday will be in "+year);  
    } 

console.log("Введите isArray() для проверки введённого значения на массив");	
function isArray(input) {  
  if (toString.call(input) === "[object Array]") { 
    return true;  
	} else {
  return false;
}  
}; //здесь вопрос call

console.log( "Для вызова функции копирования массива наберите createClone()" );
function createClone(old_array) {
  if (toString.call(old_array) !== "[object Array]") {
    console.log( "This is not Array!" );//здесь вопрос о неправильном значении
  }
  var new_array;
  new_array = old_array.slice(0);
  console.log( "Array = [" + old_array + "] and his clone is [" + new_array + "]");
}


console.log( 'Введите toUpOrLow() для инвертирования строки');
function toUpOrLow(str) {

//Имеется вопрос по преобразованию строки
  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';  
  var result = [];  
    
  for(var x=0; x<str.length; x++)  
  {  
    if(UPPER.indexOf(str[x]) !== -1)  
    {  
      result.push(str[x].toLowerCase());  
    }  
    else if(LOWER.indexOf(str[x]) !== -1)  
    {  
      result.push(str[x].toUpperCase());  
    }  
    else   
    {  
      result.push(str[x]);  
    }  
  }  
console.log(result.join(''));  

};


console.log("Для вызова функции, которая устраняеет повторения в массиве введите removeDuplicate()");
function removeDuplicate(num) {  
  var out=[],  
      obj={};  
   
  for (var x=0; x<num.length; x++) {  
    obj[num[x]]=0;  
  }  
  for (x in obj) {  
    out.push(x);  
  }  
  return out;  
} 


console.log('Для перетасовки массива используйте функцию shuffleArray()');
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;//Спросить про temp, так как массив перемешивается, но повторяется
    }
    return array;
}

console.log('Чтобы удалить null, 0, blank, false, undefined и NaN, используйте функцию filterArray()');
function filterArray(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    if (Boolean(arr[i]) === false) {
      arr.splice(arr[i], 1);
    } 
  }
  return arr;
}

console.log('Для сортировки массива library введите sortLibrary()');

function sortLibrary() {

var library = [

{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

];

library.sort();
console.log( library );
}


console.log('Для объединения двух массивов введите функцию mergeArray()')
function mergeArray(array1, array2) {  
    var result_array = [];  
    var arr = array1.concat(array2);  
    var len = arr.length;  
    var assoc = {};  
  
    while(len--) {  
        var item = arr[len];  
  
        if(!assoc[item])   
        {   
            result_array.unshift(item);  
            assoc[item] = true;  
        }  
    }  
  
    return result_array;  
}  //НЕ ПОНИМАЮ, ЗАЧЕМ НУЖЕН ОБЪЕКТ!!!!!!!!!!

console.log("Для выбора случайного элемента введённого массива введите функцию getRandom()");
function getRandom(items) {

  var item = items[Math.floor(Math.random()*items.length)];
  console.log(item);

} 

console.log("Для перешания элементов массива введите функцию moveArr")
function moveArr(arr, old_index, new_index) {  
    while (old_index < 0) {  
        old_index += arr.length;  
    }  
    while (new_index < 0) {  
        new_index += arr.length;  
    }  
    if (new_index >= arr.length) {  
        var k = new_index - arr.length;  
        while ((k--) + 1) {  
            arr.push(undefined);  
        }  
    }  
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);    
   return arr;  
}  

console.log("Для преобразования строки в массив используйте функцию strToArr()");
function strToArr(str) {
     console.log(str.split(" "));
}

console.log("Для того чтобы строка начиналась с заглваной буквы используйте функцию capitalizeFirstLetter()");
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log("Для преобразования строки в ГорбатыйРгистр используйте camelize()");
camelize = function camelize(str) {  
      return str.replace(/\W+(.)/g, function(match, chr)  
       {  
            return chr.toUpperCase();  
        });  
    } //ВООООБЩЕ НЕ ПОНЯЛ!!!!!!!!!!


console.log("Для нахождения максимального значения в массиве введите findMax");
function findMax(arr) {
  var max = Math.max.apply(Math, arr);
  console.log( max );
}

console.log("Для нахождения минимального значения в массиве введите findMin");
function findMin(arr) {
  var min = Math.min.apply(Math, arr);
  console.log( min );
}

console.log("Для проверки на число введите isNumber");
function isNumber(obj) {
 console.log( !isNaN(parseFloat(obj)) ); 
}

console.log("Для нахождения суммы элементов массива введите findSum()");
function findSum(arr) {

var sum = 0;  

for(var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i]; 
}
  
console.log(sum);
}



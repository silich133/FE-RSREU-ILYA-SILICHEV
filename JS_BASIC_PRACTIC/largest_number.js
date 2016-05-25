function findLargNumber (x,y) {
if (x%1 !== 0) {
  alert(x+" is not integer number");
} else {
  parseInt(x);
}
if (y%1 !== 0) {
  alert(y+" is not integer number");
} else {
  parseInt(y);
}

if (x>y) {
  alert("The largest number is: "+x);
} else if (x<y) {
  alert("The largest number is: "+y);
} else {
  alert (x+"="+y);
}
}  

function itarate0_9() {
  for (i=0; i<=9; i++) {
    if (i%2==0) {
      console.log(i+" is odd");
    } else if (i%2==1) {
      console.log(i+" is even");
    }
  }
}
  itarate0_9();

  function isBlank(x) {
if (x.length==0) {
  console.log("Это строка пуста");
} else {
  console.log("Это строка не пуста");
}
}


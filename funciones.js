function digitsSum(inputInt) {
    var res = 0;
    inputInt.split('').forEach(c => res += parseInt(c));
    document.getElementById("resultado").innerHTML = res;
  }
  function isPalindrome(inputStr)
  {
    var cadena = inputStr.toLowerCase();
    var len = cadena.length;
    var mid = Math.floor(len/2);
    for ( var i = 0; i < mid; i++ ) {
        if (cadena[i] !== cadena[len - 1 - i]) {
            document.getElementById("resultado2").innerHTML = "false";
            return false;            
        }
    }
    document.getElementById("resultado2").innerHTML = "true";
    return true;
}

function maxAdjacentProd(inputArray){
    var cadena = inputArray;
    var x=cadena.split('/');
    var arr=[];
    var res="";
    for (i=0;i<x.length-1; i++){
       res= x[i]*x[i+1];
       arr.push(res);//añade nuevos elementos y devuelve nueva longitud//
    }
    document.getElementById("resultado3").innerHTML = Math.max(...arr);
    return Math.max(...arr);
    }

function fn0(){
   let previouse = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = previouse + 0;
}

 function fn1(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 1;
 }

 function fn2(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 2;
 }
 function fn3(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 3;
 }
 function fn4(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 4;
 }
 function fn5(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 5;
 }
 function fn6(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 6;
 }
 function fn7(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 7;
 }

 function fn8(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 8;
 }

 function fn9(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 9;
 }

 function feraser(){
    let previouse = document.getElementById("display").innerHTML;
    let eraser = previouse.slice(0, -1);
    document.getElementById("display").innerHTML = eraser;

 }

 let firstsave;
 let op;


 function addition(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 1;

 }

 function mn(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 2;

 }

 function ml(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 3;

 }

 function dv(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 4;

 }

 function eq(){
    let secondsave = document.getElementById("display").innerHTML;
    if(op==1){
        document.getElementById("display").innerHTML = parseInt(firstsave) + parseInt(secondsave);
        
    }else if(op == 2){
        document.getElementById("display").innerHTML = parseInt(firstsave) - parseInt(secondsave);
    }else if(op == 3){
        document.getElementById("display").innerHTML = parseInt(firstsave) * parseInt(secondsave);
    }else if(op == 4){
        document.getElementById("display").innerHTML = parseInt(firstsave) / parseInt(secondsave);
    }else document.getElementById("display").innerHTML ="invalid";




 }
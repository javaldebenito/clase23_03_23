var nt1 = 4.5; 
var nt2 = 2.0; 
var nt3 = 3.3; 
var suma = nt1 + nt2 + nt3; 
 
if(suma/3>=4){ 
    console.log("aprobado"); 
 
} 
else{ 
    console.log ("reprobado"); 
 
} 
 
//sentencia switch 
 
var vProm  =suma/3; 
var sw = 0; 
 
if(vProm >=1 && vProm<4){sw=3;} 
else if(vProm >=4 && vProm<5){ sw=4;} 
else if(vProm >=5 && vProm<6){ sw=5;} 
else if(vProm >=6 && vProm<7){ sw=6;} 
 
switch(sw){ 
    case 3: 
        console.log("El promedio" + vProm +"es insuficiente"); 
        break; 
     
    case 4: 
        console.log("El promedio" + vProm +"es suficiente"); 
        break;   
      
    case 5: 
        console.log("El promedio" + vProm +"es bueno"); 
        break;    
 
    case 6: 
        console.log("El promedio" + vProm +"es muy bueno"); 
        break;      
     
    default: 
        console.log("Promedio no generado");     
                 
 
}

var vArr = ["Juan Perez", 50, 4.3, true];
console.log("Nombre: " + vArr[0]);
console.log("Edad: " + vArr[1]);
console.log("Promedio: " + vArr[2]);
console.log("Copero?: " + vArr[3]);

//ciclos iterativos

for(var x=1;x<vArr.length;x++){
    console.log(vArr[x]);
}


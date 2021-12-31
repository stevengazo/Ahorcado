const div1 = document.getElementById("Part1");
const inputWorld = document.getElementById("world");

const errorMessage = document.getElementById("message");
const input1 = document.getElementById("prueba1");
const input2 = document.getElementById("prueba2");
const input3 = document.getElementById("prueba3");




function initPlay(){
    const IsValid = validateValues();
    if(IsValid){
        errorMessage.innerText= "";
        alert("cambio");
        div1.style.display= "none";
    }
    else{
        errorMessage.innerText= "¡No introdujo los datos necesarios!";
    }
}
   
const cleanInputs = ()=>{
    inputWorld.value="";
    input1.value= "";
    input2.value= "";
    input3.value= "";
};


const validateValues = function(){
    let bandInputWorld = (inputWorld.value !=='') ? true: false;
    let bandInput1 = (input1.value !=='') ? true: false;
    let bandInput2 = (input2.value !=='') ? true: false;
    let bandInput3 = (input3.value !=='') ? true: false;

    if( bandInput1 && bandInputWorld && bandInput2 && bandInput3){
        debugger;
        return true;
    }
    else{
        debugger;
        return false;
    }
}
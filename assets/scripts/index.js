const div1 = document.getElementById("Part1");
const inputWorld = document.getElementById("world");

const input1 = document.getElementById("prueba1");
const input2 = document.getElementById("prueba2");
const input3 = document.getElementById("prueba3");

function sample(){
    alert(`sample`);
    div1.style.display= "none";
}        
const cleanInputs = ()=>{
    inputWorld.value="";
    input1.value= "";
    input2.value= "";
    input3.value= "";
};
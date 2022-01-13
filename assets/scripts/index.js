import GeneralMethods from "./GeneralMethods.js";
import DrawingPerson from "./DrawingPerson.js";

let world;

let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let NumbersAndSymbols = ['0','1','2','3','4','5','6','7','8','9','0','_'];


const buttonPlay= document.getElementById("buttonPlay");
buttonPlay.addEventListener("click",initPlay);

const btnClean = document.getElementById("btnClean");
btnClean.addEventListener('click',()=>{
    const general = new GeneralMethods();
    general.cleanInputs([inputWorld,input1,input2,input3]);
});


const div1 = document.getElementById("Part1");
const div2 = document.getElementById("Part2");

const errorMessage = document.getElementById("message");

const inputWorld = document.getElementById("world");
const input1 = document.getElementById("prueba1");
const input2 = document.getElementById("prueba2");
const input3 = document.getElementById("prueba3");

const divButtons2 = document.getElementById("buttons2");
const divButtons3 = document.getElementById("buttons3");


function samplehandler(event){
    const element=  event.target; 
    debugger;
    alert(`Onclick: "${element.innerText}"`);
    element.style.display='none';
    element.style.visibility = 'hidden';
}


function initPlay(){
    let general =new  GeneralMethods();
    const IsValid = general.validateValues([inputWorld.value,input1.value,input2.value,input3.value]);

    if(IsValid){
        errorMessage.innerText= "";
        div1.style.display= "none";
        const listofBtns= general.GenerateLetters([alphabet,divButtons2]);
        const listOfNumbers = general.GenerateLetters([NumbersAndSymbols,divButtons3]);
        listofBtns.forEach(element => {
            element.addEventListener('click',samplehandler);
            divButtons2.appendChild(element);
        });
        listOfNumbers.forEach(element => {
            element.addEventListener('click',samplehandler);
            divButtons2.appendChild(element);
        });
        div2.style.display="inherit";        
    }
    else{
        errorMessage.innerText= "¡No introdujo los datos necesarios!";
    }
}



const pase = document.getElementById('pase');
pase.addEventListener('click',()=>{
    div1.style.display= "none";
    div2.style.display="inherit";  
});








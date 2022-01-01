import GeneralMethods from "./GeneralMethods.js";

let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const buttonPlay= document.getElementById("buttonPlay");
buttonPlay.addEventListener("click",initPlay);

const div1 = document.getElementById("Part1");
const div2 = document.getElementById("Part2");

const inputWorld = document.getElementById("world");

const errorMessage = document.getElementById("message");
const input1 = document.getElementById("prueba1");
const input2 = document.getElementById("prueba2");
const input3 = document.getElementById("prueba3");

const divButtons2 = document.getElementById("buttons2");



function samplehandler(value){
    alert(`samplehander ${value}`);
}



function initPlay(){
    let general =new  GeneralMethods();
    debugger;
    const IsValid = general.validateValues([inputWorld.value,input1.value,input2.value,input3.value]);
    debugger;
    if(IsValid){
        errorMessage.innerText= "";
        alert("cambio");
        div1.style.display= "none";
        const listofBtns= general.GenerateLetters([alphabet,divButtons2]);
        div2.style.display="inherit";        
    }
    else{
        errorMessage.innerText= "¡No introdujo los datos necesarios!";
    }

}



class drawingPerson{
    canvas = document.getElementById("canvas")
    ctx = this.canvas.getContext("2d");
    line=function(){
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(0, 0, 150, 75);
    }
    circule= function(){
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

}








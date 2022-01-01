let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const div1 = document.getElementById("Part1");
const div2 = document.getElementById("Part2");

const inputWorld = document.getElementById("world");

const errorMessage = document.getElementById("message");
const input1 = document.getElementById("prueba1");
const input2 = document.getElementById("prueba2");
const input3 = document.getElementById("prueba3");

const divButtons2 = document.getElementById("buttons2");

function GenerateLetters(){
    let divButtons = divButtons2;
    const btnsAlphabet = alphabet.map((letter)=>{
        let button = document.createElement("button");
        button.innerText = `${letter.toUpperCase()}`;
        button.classList.add(`button-style-2`);
        button.setAttribute(`ìd`,`button-${letter.toUpperCase()}`);
        button.setAttribute(`onclick`,`samplehandler('${letter.toUpperCase()}')`);    
        divButtons.appendChild(button);
        return button;
    });
    return btnsAlphabet;    
}

function samplehandler(value){
    alert(`samplehander ${value}`);
}



function initPlay(){
    let general =new  GeneralMethods();

    const IsValid = general.validateValues();
    if(IsValid){
        errorMessage.innerText= "";
        alert("cambio");
        div1.style.display= "none";
        const listofBtns=GenerateLetters();
        div2.style.display="inherit";        
    }
    else{
        errorMessage.innerText= "¡No introdujo los datos necesarios!";
    }

}



class drawingPerson{
    canvas = document.getElementById("canvas")

    line=function(){
        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);
    }

}

class GeneralMethods{
    cleanInputs = ()=>{
        inputWorld.value="";
        input1.value= "";
        input2.value= "";
        input3.value= "";
    }
    validateValues = function(){
        let bandInputWorld = (inputWorld.value !=='') ? true: false;
        let bandInput1 = (input1.value !=='') ? true: false;
        let bandInput2 = (input2.value !=='') ? true: false;
        let bandInput3 = (input3.value !=='') ? true: false;
    
        if( bandInput1 && bandInputWorld && bandInput2 && bandInput3){
            return true;
        }
        else{
            return false;
        }
    }
}








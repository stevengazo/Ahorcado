import GeneralMethods from "./utils/GeneralMethods.js";
import DrawingPerson from "./utils/DrawingPerson.js";

let draw = new DrawingPerson();

let world;


let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let NumbersAndSymbols = ['0','1','2','3','4','5','6','7','8','9','0','-'];


const buttonPlay= document.getElementById("buttonPlay");
buttonPlay.addEventListener("click",initPlay);

const btnClean = document.getElementById("btnClean");
btnClean.addEventListener('click',()=>{
    const general = new GeneralMethods();
    general.cleanInputs([inputWorld,prueba1,prueba2,prueba3]);
});


const div1 = document.getElementById("Part1");
const div2 = document.getElementById("Part2");

const errorMessage = document.getElementById("message");

const inputWorld = document.getElementById("world");
const prueba1 = document.getElementById("prueba1");
const prueba2 = document.getElementById("prueba2");
const prueba3 = document.getElementById("prueba3");

const divButtons2 = document.getElementById("buttons2");
const divButtons3 = document.getElementById("buttons3");


function samplehandler(event){
    const element=  event.target; 
    const bandFound = checkLetter(element.innerText);
    if(bandFound){
        wrotteWorld();
    }
    element.style.display='none';
    element.style.visibility = 'hidden';

}


function wrotteWorld() {
    const infoP = document.getElementById(`Information`);
    const worldIncognit = world.map(
        function (element) {
            if(element.idFound==false){
                return " _ ";
            }
            else{
                return `${element.letter}`;
            }
        }
    );
    infoP.innerText= worldIncognit.toString();
}

function checkLetter(Letter) {
    let value = world.find(element=> element.letter.toUpperCase()== Letter.toUpperCase());    
    debugger;
    if( value !== undefined){
        ///Letra encontrada
        const info_Message= document.getElementById("info-Message");
        info_Message.style.color= "green";
        info_Message.innerText=`${Letter} se encontró`;
        for (let I = 0; I < world.length; I++) {
            if(world[I].letter == Letter){
                world[I].idFound= true;            
            }            
        };
        return true;
    }
    else{
        ///Letra No encontrada
        const info_Message= document.getElementById("info-Message");
        info_Message.style.color= "red";
        info_Message.innerText=`${Letter} no se encontró`;
        return false;
    }    
}


function initPlay(){
    let general =new  GeneralMethods();

    const IsValid = general.validateValues([inputWorld.value,prueba1.value,prueba2.value,prueba3.value]);
    const checkLetters = general.foundInvalidLetters(inputWorld.value,alphabet,NumbersAndSymbols);
    const invalidLetters = (checkLetters.length !== 0) ? true : false;





    if(invalidLetters)
    {
        errorMessage.innerText= `Letras no validas ${checkLetters}`;
    }
    else if(!IsValid){    
        errorMessage.innerText= "¡No introdujo los datos necesarios!";
    }
    else
    {        
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

        const tmpworld = Array.from(inputWorld.value);
        world = tmpworld.map(function (element) {
            if(element===" "){
                element ="-";
            }
            let tmpObjet = {
                letter : element.toUpperCase(),
                idFound: false
            };
            return tmpObjet;
        });
        wrotteWorld();    
    }

}



const pase = document.getElementById('pase');
pase.addEventListener('click',()=>{
    div1.style.display= "none";
    div2.style.display="inherit";  
});


const pista1 = document.getElementById('pista-1');
pista1.addEventListener('click',(element)=>{        
    pista1.innerText = prueba1.value;
});

const pista2 = document.getElementById('pista-2');
pista2.addEventListener('click',(element)=>{        
    pista2.innerText = prueba2.value;
});
const pista3 = document.getElementById('pista-3');
pista3.addEventListener('click',(element)=>{        
    pista3.innerText = prueba3.value;
});








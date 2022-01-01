
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

   GenerateLetters=function({alphabet,div}){
        let divButtons = div;
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


}



export default GeneralMethods;
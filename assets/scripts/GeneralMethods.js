
class GeneralMethods{
    cleanInputs = ()=>{
        inputWorld.value="";
        input1.value= "";
        input2.value= "";
        input3.value= "";
    }
    
    validateValues = function(inputs=['']){
        var bandFalse = inputs.map((element)=>{
            if(element!==''){
                return true;
            }else{
                return false;
            }
        });        
        for (let index = 0; index < bandFalse.length; index++) {
            const element = bandFalse[index];
            if(element !== true){
                return false;
            }
            else{
            }            
        }
        return true;
        
    }

   GenerateLetters=function(values){
        let divButtons = values[1];
        debugger;
        const btnsAlphabet = values[0].map((letter)=>{ 
            debugger;       
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
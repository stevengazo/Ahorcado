
class GeneralMethods{
    cleanInputs = (values)=>{
        values[0].value="";
        values[1].value= "";
        values[2].value= "";
        values[3].value= "";
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
        const btnsAlphabet = values[0].map((letter)=>{                  
            let button = document.createElement("button");
            button.innerText = `${letter.toUpperCase()}`;
            button.classList.add(`button-style-2`);
            button.setAttribute(`ìd`,`button-${letter.toUpperCase()}`);
            //button.setAttribute(`onclick`,`samplehandler('${letter.toUpperCase()}')`);    

            return button;
        });
        return btnsAlphabet;    
    }
}






export default GeneralMethods;
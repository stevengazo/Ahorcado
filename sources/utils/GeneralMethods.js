
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


    foundInvalidLetters = function(world,alphabet, others){
        world = Array.from(world);
        const values = alphabet.concat(others);
        let InvalidCharacters = [];
        for (let i = 0; i < world.length; i++) {
            const BandInvalid = values.includes(world[i]);            
            if(!BandInvalid){            
                const value = world[i];
                InvalidCharacters.push( world[i]);
            }        
        }
        return InvalidCharacters;
      
    }



   GenerateLetters=function(values){
        let divButtons = values[1];  
        const btnsAlphabet = values[0].map((val)=>{                  
            let button = document.createElement("button");
            const letter = val.toUpperCase()
            button.innerText = `${letter}`;
            button.classList.add(`button-style-2`);
            button.setAttribute(`ìd`,`button-${letter}`);
            //button.setAttribute(`onclick`,`samplehandler('${letter.toUpperCase()}')`);    

            return button;
        });
        return btnsAlphabet;    
    }
}






export default GeneralMethods;
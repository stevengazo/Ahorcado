class drawingPerson{
    canvas = document.getElementById("canvas")
    canvasWidth = canvas.atr
    ctx = this.canvas.getContext("2d");

    cesped=() =>{
        ctx.fillStyle = "green";
        ctx.fillRect(0,430 , 499,70);
    }
    poste=() =>{
        ctx.fillStyle = "brown";
        ctx.fillRect(120,80 , 30,350);
    }
    posteHorizontal=() =>{
        ctx.fillStyle = "brown";
        ctx.fillRect(120,80 , 190,15);
    }
    posteVerticalPequeño=() =>{
        ctx.fillStyle = "brown";
        ctx.fillRect(302, 80 , 8,80); 
    }
    cabeza=() =>{
        ctx.beginPath();	  
        ctx.arc(304,195,35, 0, 2*Math.PI);
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    torso=() =>{
        fillStyle = "back";
        fillRect(284,228 ,40 ,90)
    }
}


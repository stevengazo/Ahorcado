
class drawingPerson{
    canvas = document.getElementById("canvas")
    ctx = this.canvas.getContext("2d");

    line=function({
        initPosition=[0,0],
        finalPosition=[0,0],
        lineWidth= 1,
        color= 'black'
    }){
        this.ctx.beginPath();
        this.ctx.lineWidth= lineWidth;
        this.ctx.moveTo(initPosition[0],initPosition[1]);
        this.ctx.lineTo(finalPosition[0], finalPosition[1]);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    circule= function(){
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    }


}



export default drawingPerson;
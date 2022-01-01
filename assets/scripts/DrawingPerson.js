
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



export default drawingPerson;
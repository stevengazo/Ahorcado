
class drawingPerson{
    canvas = document.getElementById("canvas")
    ctx = this.canvas.getContext("2d");

    line= function () {
        ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
    }

}



export default drawingPerson;
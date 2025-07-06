// (e,startX,startY,ctx)


export default class AllShapes{

    
    constructor(e,startX,startY,ctx){
        this.currentX=e.offsetX;
        this.currentY=e.offsetY;

        this.normalizedX=Math.min(startX,this.currentX)
        this.normalizedY=Math.min(startY,this.currentY)

        this.width=Math.abs(this.currentX - startX)
        this.height=Math.abs(this.currentY - startY)

        this.ctx=ctx;

    }


    drawCircle(){
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.normalizedX + this.width / 2, 
          this.normalizedY + this.height / 2,  
          this.width / 2,
          this.height / 2, 
          0, 
          0, 
          2 * Math.PI 
        )
        this.ctx.strokeStyle = "white"; 
        this.ctx.lineWidth = 2;       
        this.ctx.stroke();

    }
     



}













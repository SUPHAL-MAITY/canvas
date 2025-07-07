

export default class AllShapes{


    constructor(currentX,currentY,startX,startY){
        this.currentX=currentX;
        this.currentY=currentY;

        this.startX=startX;
        this.startY=startY;

        this.normalizedX=Math.min(startX,this.currentX)
        this.normalizedY=Math.min(startY,this.currentY)

        this.width=Math.abs(this.currentX - startX)
        this.height=Math.abs(this.currentY - startY)

        

    }


    drawCircle(ctx){
        ctx.beginPath();
        ctx.ellipse(
          this.normalizedX + this.width / 2, 
          this.normalizedY + this.height / 2,  
          this.width / 2,
          this.height / 2, 
          0, 
          0, 
          2 * Math.PI 
        )
        ctx.strokeStyle = "white"; 
        ctx.lineWidth = 2;       
        ctx.stroke();

    }


    drawDiamond(ctx){
        ctx.beginPath()
        ctx.moveTo(this.normalizedX  + this.width/2 , this.normalizedY )  
        ctx.lineTo(this.normalizedX   + this.width , this.normalizedY + this.height/2)
        ctx.lineTo(this.normalizedX  + this.width/2 , this.normalizedY + this.height)
        ctx.lineTo(this.normalizedX   , this.normalizedY + this.height/2)
        ctx.closePath()
        ctx.stroke()

    }



    static AllShapes(obj){
        return new AllShapes(obj.currentX,obj.currentY,obj.startX,obj.startY)
    }


    
     



}













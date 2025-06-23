export function initDraw(canvas,ctx){

    let clicked=false;
    let startX=0;
    let startY=0;
          

      const handleMouseDown=(e)=>{

      const {x,y}=getMousePos(e)
      clicked=true
      
      console.log("x while mouse down",x);
      console.log("y while mouse down",y)

      console.log("x while mouse down in event clientx",e.clientX);
      console.log("y while mouse down in event clientx",e.clientY)

      startX=x;
      startY=y;



    }


    const handleMouseMove=(e)=>{
         const {x,y}=getMousePos(e)
         if(clicked){
           console.log("x while mouse move",x);
           console.log("y while mouse move",y)
          
           const width= x - startX;
           const height=y - startY;

           ctx.clearRect(0,0,canvas.width,canvas.height)
           ctx.strokeRect(startX,startY,width,height)
           

         }
       
    }


    const handleMouseUp=(e)=>{
       const {x,y}=getMousePos(e)
       clicked=false
       console.log("x while mouse up",x);
       console.log("y while mouse up",y)
       console.log("x while mouse up in event clientx",e.clientX);
       console.log("y while mouse up in event clientx",e.clientY)

    }

    const handleMouseLeave=(e)=>{
       const {x,y}=getMousePos(e)
       clicked=false;
       console.log("x while mouse leave",x);
       console.log("y while mouse leave",y)
       console.log("x while mouse leave in event clientx",e.clientX);
       console.log("y while mouse leave in event clientx",e.clientY)

    }


        function getMousePos(event){
        const rect=canvas.getBoundingClientRect()

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }



       canvas.addEventListener("mousedown",handleMouseDown)
       canvas.addEventListener("mousemove",handleMouseMove)
       canvas.addEventListener("mouseup",handleMouseUp)
       canvas.addEventListener("mouseleave",handleMouseLeave)
       


   // Cleanup on unmount
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };


}
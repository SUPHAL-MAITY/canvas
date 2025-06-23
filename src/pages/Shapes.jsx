import  {useRef,useState,useEffect} from 'react'

const Shapes = () => {

    const canvasRef=useRef(null)
    const ctxRef=useRef(null)
    

    let clicked=false;
    let startX=0;
    let startY=0;
    
    useEffect(()=>{

       const canvas=canvasRef.current;
       if(!canvas) return;
       
       canvas.height=window.innerHeight;
       canvas.width=window.innerWidth;
        
       
       const ctx=canvas.getContext("2d")
       ctx.lineCap="round"
       ctx.lineJoin="round"
       ctx.strokeStyle="white"
       ctxRef.current=ctx;
       


    },[])
    



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
           ctxRef.current.clearRect(0,0,canvasRef.current.width, canvasRef.current.height)
           ctxRef.current.strokeRect(startX,startY,width,height)
           

          //  console.log("x while mouse move in event clientx",e.clientX);
          //  console.log("y while mouse move in event clientx",e.clientY)
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

    useEffect(()=>{
       const canvas=canvasRef.current ;
       if(!canvas) return ;

       canvas.addEventListener("mousedown",handleMouseDown)
       canvas.addEventListener("mousemove",handleMouseMove)
       canvas.addEventListener("mouseup",handleMouseUp)
       canvas.addEventListener("mouseleave",handleMouseLeave)
       canvas.addEventListener("keydown",handleMouseDown)


   // Cleanup on unmount
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
      



    },[])


    function getMousePos(event){
        const rect=canvasRef.current.getBoundingClientRect()

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }






  return (
    <>
    <canvas ref={canvasRef} style={{
    
       
    backgroundColor:"black"
  }}></canvas>
      
    </>
  )
}

export default Shapes

import  {useRef,useState,useEffect} from 'react'

const Shapes = () => {

    const canvasRef=useRef(null)
    const ctxRef=useRef(null)

    
    
    useEffect(()=>{

       const canvas=canvasRef.current;
       if(!canvas) return;
       canvas.width=800;
       canvas.height=500;
        
       
       const ctx=canvas.getContext("2d")
       ctx.lineCap="round"
       ctx.lineJoin="round"
       ctxRef.current=ctx;


    },[])



    const handleMouseDown=()=>{

    }


    const handleMouseMove=()=>{

    }

    const handleMouseUp=()=>{

    }

    const handleMouseLeave=()=>{

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
    <canvas ref={canvasRef} style={{"border":"2px solid black"}}></canvas>
      
    </>
  )
}

export default Shapes

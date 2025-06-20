import { useState, useRef, useEffect } from "react";

const MouseEvent = () => {
  const canvasRef = useRef(null);
  const isDrawing=useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;


   ctx.lineWidth=2
   ctx.lineCap="round"
   ctx.strokeStyle="black"

   const getMousePos=(e)=>{
     const {left,top}=canvas.getBoundingClientRect()

     return {
        x: e.clientX- left,
        y:e.clientY-top

     }

   }


   const handleMouseDown=(e)=>{
      isDrawing.current=true;
      const {x,y}=getMousePos(e)

      console.log("x of mouse", x)
      console.log("y of mouse", y)

      ctx.beginPath()
      ctx.moveTo(x,y)
   }

   const handleMouseMove=(e)=>{
      if(!isDrawing.current) return;
      const {x,y}= getMousePos(e)
      ctx.lineTo(x,y)
      ctx.stroke()
   }

   const handleMouseUp=()=>{
    isDrawing.current=false;
    ctx.closePath()
    
   }
   

   canvas.addEventListener("mousedown",handleMouseDown)
   canvas.addEventListener("mousemove",handleMouseMove)
   canvas.addEventListener("mouseup",handleMouseUp)

   return ()=>{
    canvas.removeEventListener("mousedown",handleMouseDown)
    canvas.removeEventListener("mousemove",handleMouseMove)
    canvas.removeEventListener("mouseup",handleMouseUp)
   }


  }, []);
  return (
    <>
      <canvas ref={canvasRef} style={{ border: "2px solid black" }}></canvas>
    </>
  );
};

export default MouseEvent;

import { useState,useRef,useEffect } from 'react'

const Board = () => {
    const canvasRef=useRef()

    
  return (
    <>
    <canvas ref={canvasRef}></canvas>
      
    </>
  )
}

export default Board;

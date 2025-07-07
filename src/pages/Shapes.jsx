import { useRef, useState, useEffect } from "react";

import Topbar from "../component/Topbar";
import  initDraw  from "../component/draw/index.jsx";


const Shapes = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [selectedIcon, setSelctedIcon] = useState("rectangle");



  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const ctx = canvas.getContext("2d");

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "white";

    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    const cleanUp = initDraw(canvasRef.current, ctxRef.current, selectedIcon);
    return cleanUp;
  }, [selectedIcon]);

  const handleSelectTool = (tool) => {
    setSelctedIcon(tool);
  };

  return (
    <>
      <Topbar onSelectTool={handleSelectTool} />
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: "black",
        }}
      ></canvas>
    </>
  );
};

export default Shapes;

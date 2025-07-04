import { useRef, useState, useEffect } from "react";
import { initDraw } from "../component/draw";
import Topbar from "../component/Topbar";

const Shapes = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [selectedIcon, setSelctedIcon] = useState("rec");

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

    const cleanUp = initDraw(canvas, ctxRef.current);

    return cleanUp;
  }, []);

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

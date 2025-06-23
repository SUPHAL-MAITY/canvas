import { useRef, useState, useEffect } from "react";
import { initDraw } from "../component/draw";

const Shapes = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

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

  return (
    <>
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

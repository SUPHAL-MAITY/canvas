import { useState, useRef, useEffect } from "react";

const Board = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null); // Persist the context
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 500;
    canvas.height = 300;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRef.current = ctx; // Store the context persistently
  }, []); // Run only once

  function getMousePos(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function startDrawing(event) {
    const { x, y } = getMousePos(event);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  }

  function draw(event) {
    if (!isDrawing) return;
    const { x, y } = getMousePos(event);
    ctxRef.current.strokeStyle = color;
    ctxRef.current.lineWidth = size;
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  }

  function stopDrawing() {
    setIsDrawing(false);
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function handleKeyDown(event) {
    if (event.key === "c") clearCanvas();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawing]); // Dependencies only affect event listeners

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <canvas
          ref={canvasRef}
          style={{ border: "1px solid black", cursor: "crosshair" }}
        />
        <br />
        <label>Color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <label> Size: </label>
        <input
          type="range"
          min="1"
          max="20"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
        <button onClick={clearCanvas}>Clear</button>
        <p>Press **C** to clear the canvas</p>
      </div>
    </>
  );
};

export default Board;

import React, { useRef, useEffect } from "react";

const Circle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 400;

    let x = 50;
    let speed = 2;
    const radius = 20;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();

      ctx.arc(x, 50, 30, 0, Math.PI * 2); // radius changed to 30
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.stroke();

      x += speed;

      if (x + radius > canvas.width || x - radius < 0) {
        speed *= -1;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ border: "2px solid black" }}></canvas>
    </>
  );
};

export default Circle;

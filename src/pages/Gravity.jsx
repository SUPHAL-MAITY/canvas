import { useState, useRef, useEffect } from "react";

const Gravity = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let y = 50;
    let velocity = 0;
    let gravity = 0.5;
    let bounceFactor = 0.7;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      velocity += gravity;
      y += velocity;

      if (y > canvas.height - 20) {
        y = canvas.height - 20;
        velocity *= -bounceFactor;
      }

      ctx.beginPath();
      ctx.arc(200, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ border: "2px solid black" }}></canvas>
    </>
  );
};

export default Gravity;

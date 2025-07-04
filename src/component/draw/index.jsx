// type Shape={
//   type : "rect";
//   x: number;
//   y:   number;
//   width: number;
//   height:number ;

// } | {
//     type: "circle";
//     centerX: number ;
//     centerY: number ;
//     radius: number ;

// }

export function initDraw(canvas, ctx, selectedIcon) {
  let clicked = false;
  let startX = 0;
  let startY = 0;

  //   let existingShapes: Shape[]= [];

  let existingShapes =    JSON.parse(localStorage.getItem("existingShapes")) || [] ;
  

  if (!ctx) return;

  const handleMouseDown = (e) => {
    const { x, y } = getMousePos(e);
    clicked = true;
    startX = x;
    startY = y;
  };

  const handleMouseMove = (e) => {
    const { x, y } = getMousePos(e);
    if (clicked) {
      const width = x - startX;
      const height = y - startY;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      clearAndRender(existingShapes, canvas, ctx);
      ctx.strokeRect(startX, startY, width, height);
    }
  };

  const handleMouseUp = (e) => {
    const { x, y } = getMousePos(e);
    clicked = false;

    const width = x - startX;
    const height = y - startY;
    console.log(selectedIcon)
    existingShapes.push({
      type: "rectangle",
      x: startX,
      y: startY,
      height,
      width,
    });
    console.log(existingShapes)
    localStorage.setItem("existingShapes",JSON.stringify(existingShapes))
  };

  const handleMouseLeave = (e) => {
    const { x, y } = getMousePos(e);
    clicked = false;
  };

  function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function clearAndRender(existingShapes, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    existingShapes.map((shape) => {
      if (shape.type === "rectangle") {
        ctx.strokeStyle = "rgba(255,255,255)";
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      }
    });
  }

  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mouseleave", handleMouseLeave);

  // Cleanup on unmount
  return () => {
    canvas.removeEventListener("mousedown", handleMouseDown);
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseup", handleMouseUp);
    canvas.removeEventListener("mouseleave", handleMouseLeave);
  };
}

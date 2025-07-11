import AllShapes from "../AllShapes.jsx";

export default function initDraw(canvas, ctx, selectedIcon) {
  let clicked = false;
  let startX = 0;
  let startY = 0;

  //   let existingShapes: Shape[]= [];
  let existingShapes = JSON.parse(localStorage.getItem("existingShapes")) || [];
  if (!ctx) return;

  const handleMouseDown = (e) => {
    console.log("selected icon", selectedIcon);
    const { x, y } = getMousePos(e);
    clicked = true;
    startX = x;
    startY = y;
  };

  const handleMouseMove = (e) => {
    const { x, y } = getMousePos(e);
    const width = x - startX;
    const height = y - startY;

    const shape = new AllShapes(e.offsetX, e.offsetY, startX, startY);

    if (clicked && selectedIcon === "rectangle") {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      clearAndRender(existingShapes, canvas, ctx);
      ctx.strokeRect(startX, startY, width, height);
    } else if (clicked && selectedIcon === "circle") {
      clearAndRender(existingShapes, canvas, ctx);
      shape.drawCircle(ctx);
    } else if (clicked && selectedIcon === "diamond") {
      console.log("clicked");
      clearAndRender(existingShapes, canvas, ctx);
      console.log("in function", ctx);
      shape.drawDiamond(ctx);
    } else if (clicked && selectedIcon === "line") {
      clearAndRender(existingShapes, canvas, ctx);
      shape.drawLine(ctx);
    }
  };

  const handleMouseUp = (e) => {
    const { x, y } = getMousePos(e);
    clicked = false;

    const currentX = e.offsetX;
    const currentY = e.offsetY;
    const width = x - startX;
    const height = y - startY;

    if (selectedIcon === "rectangle") {
      existingShapes.push({
        type: "rectangle",
        x: startX,
        y: startY,
        height,
        width,
      });
    } else if (selectedIcon === "circle") {
      existingShapes.push({
        type: "circle",
        currentX,
        currentY,
        startX,
        startY,
      });
    } else if (selectedIcon === "diamond") {
      existingShapes.push({
        type: "diamond",
        currentX,
        currentY,
        startX,
        startY,
      });
    } else if (selectedIcon === "line") {
      existingShapes.push({
        type: "line",
        currentX,
        currentY,
        startX,
        startY,
      });
    }

    console.log(existingShapes);
    localStorage.setItem("existingShapes", JSON.stringify(existingShapes));
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
      const allShapes = new AllShapes(
        shape.currentX,
        shape.currentY,
        shape.startX,
        shape.startY
      );

      if (shape.type === "rectangle") {
        ctx.strokeStyle = "rgba(255,255,255)";
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type === "circle") {
        allShapes.drawCircle(ctx);
      } else if (shape.type === "diamond") {
        allShapes.drawDiamond(ctx);
      } else if (shape.type === "line") {
        allShapes.drawLine(ctx);
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

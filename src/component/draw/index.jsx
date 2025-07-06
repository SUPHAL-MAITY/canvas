import AllShapes from "../AllShapes.jsx";

export function initDraw(canvas, ctx, selectedIcon) {
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

    const shape = new AllShapes(e, startX, startY, ctx);

    if (clicked && selectedIcon === "rectangle") {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      clearAndRender(existingShapes, canvas, ctx);
      ctx.strokeRect(startX, startY, width, height);
    } else if (clicked && selectedIcon === "circle") {
      clearAndRender(existingShapes, canvas, ctx);

      shape.drawCircle();
    }
  };

  const handleMouseUp = (e) => {
    const { x, y } = getMousePos(e);
    clicked = false;

    const shape = new AllShapes(e, startX, startY, ctx);

    const width = x - startX;
    const height = y - startY;
    console.log(selectedIcon);
    if (selectedIcon === "rectangle") {
      existingShapes.push({
        type: "rectangle",
        x: startX,
        y: startY,
        height,
        width,
      });
    } else if (selectedIcon === "circle") {
      const centerX = shape.normalizedX + shape.width / 2;
      const centerY = shape.normalizedY + shape.height / 2;
      let widthCircle = shape.width / 2;
      let heightCircle = shape.height / 2;

      existingShapes.push({
        type: "circle",
        centerX,
        centerY,
        widthCircle,
        heightCircle,
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
      if (shape.type === "rectangle") {
        ctx.strokeStyle = "rgba(255,255,255)";
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type === "circle") {
        console.log("shape.centerX", shape.centerX);
        ctx.beginPath();
        ctx.ellipse(
          shape.centerX,
          shape.centerY,
          shape.widthCircle,
          shape.heightCircle,
          0,
          0,
          2 * Math.PI
        );
        ctx.stroke();
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

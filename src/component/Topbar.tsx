import { useState } from "react";

const Topbar = ({ onSelectTool }) => {
  const [activated, setActivated] = useState("rectangle");

  const tools = [
    { iconClass: "fas fa-minus fa-2x", name: "line" },
    { iconClass: "fa-regular fa-square fa-2x", name: "rectangle" },
    { iconClass: "fa-regular fa-circle fa-2x", name: "circle" },
    { iconClass: "fas fa-diamond fa-2x", name: "diamond" },
    { iconClass: "fas fa-pencil fa-2x", name: "pencil" },
    { iconClass: "fa-solid fa-t fa-2x", name: "text" },
    { iconClass: "fas fa-eraser fa-2x", name: "eraser" },
  ];

  const handleClick = (c: { iconClass: string; name: string }) => {
    onSelectTool(c.name);
    setActivated(c.name);
    if(c.name=="eraser"){
        localStorage.removeItem("existingShapes")
        window.location.reload()
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "16px",
        marginTop: "10px",
        backgroundColor: "rgb(30, 29, 29)",
        width: "50%",
        height: "50px",
        borderRadius: "16px",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {tools.map((c,i) => (
        <i
          onClick={() => handleClick(c)}
          className={`${c.iconClass}`}
          style={{ color: activated === c.name ? "red" : "white" }}
          key={i}
        ></i>
      ))}
    </div>
  );
};

export default Topbar;

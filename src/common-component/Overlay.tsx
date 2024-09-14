import React from "react";

interface ICross {
  handleCross: any;
}

const Overlay: React.FC<ICross> = ({ handleCross }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "#fff",
        fontSize: "20px",
        background: "#0000ff",
        padding: "10px 18px",
        borderRadius: "40px",
        cursor: "pointer",
      }}
      onClick={handleCross}
    >
      X
    </div>
  );
};

export default Overlay;

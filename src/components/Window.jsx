import { useNavigate } from "react-router-dom";
import xIcon from "../assets/XLM.png";

export default function Window({ title, children, leftContent }) {
  const navigate = useNavigate();

  return (
    <div className="window">

      <div className="window-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {leftContent && leftContent}  
          <span>{title}</span>
        </div>
        <button className="window-close" onClick={() => navigate("/")}>
          <img src={xIcon} alt="Close" style={{ width: "30px", height: "30px" }} />
        </button>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

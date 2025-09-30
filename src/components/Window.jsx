import { useNavigate } from "react-router-dom";
import xIcon from "../assets/XLM.png";

export default function Window({ title, children }) {
  const navigate = useNavigate();

  return (
    <div className="window">
      {/* Title bar */}
      <div className="window-bar">
        <span>{title}</span>
        <button className="window-close" onClick={() => navigate("/")}>
          <img src={xIcon} alt="Close" style={{ width: "30px", height: "30px" }} />
        </button>
      </div>

      {/* Page content */}
      <div className="window-content">{children}</div>
    </div>
  );
}
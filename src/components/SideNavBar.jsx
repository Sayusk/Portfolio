import React from "react";
import { Link } from "react-router-dom"; // ⬅️ use Router links instead of <a>
import userLM from "../assets/userLM.png";
import folderLM from "../assets/folderLM.png";
import atLM from "../assets/atLM.png";

function SideNavBar() {
    return (
        <aside className="side-navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/about">
                            <img src={userLM} alt="About Me" style={{ width: "32px", height: "32px" }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/work">
                            <img src={folderLM} alt="Work" style={{ width: "32px", height: "32px" }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <img src={atLM} alt="Contact" style={{ width: "32px", height: "32px" }} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNavBar;

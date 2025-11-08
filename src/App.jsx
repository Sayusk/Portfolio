import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import SideNavBar from "./components/SideNavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

import clickSound from "./assets/click.wav"; 
import muteIcon from "./assets/MuteLM.png"; 
import unmuteIcon from "./assets/UnmuteLM.png"; 

function App() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    let audio;
    try {
      audio = new Audio(clickSound);
    } catch (error) {
      console.error("Failed to load sound:", error);
      return;
    }
    audio.volume = 0.3;

    const handleClick = (e) => {
      if (!e.target.closest("button, a") || muted) return;
      const sound = audio.cloneNode();
      sound.play().catch(() => {});
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [muted]);

  return (
    <Router>
      <SideNavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/*Mute Button*/}
      <button
        className="mute-btn"
        onClick={() => setMuted(!muted)}
        title={muted ? "Unmute Sounds" : "Mute Sounds"}
      >
        <img
          src={muted ? muteIcon : unmuteIcon}
          alt={muted ? "Muted" : "Unmuted"}
          className="mute-icon"
        />
      </button>
    </Router>
  );
}

export default App;

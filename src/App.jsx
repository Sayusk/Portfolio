import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail"; // 🆕 import

function App() {
  return (
    <Router>
      <SideNavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} /> {/* 🆕 dynamic route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

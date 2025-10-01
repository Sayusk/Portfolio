import { useState } from "react";

function Footer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <footer
      className={`footer ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p>&copy; 2025 Alan Yusuke Sassano Vilares. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

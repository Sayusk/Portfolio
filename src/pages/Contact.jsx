import Window from "../components/Window";
import githubIcon from "../assets/githubLM.png";
import instagramIcon from "../assets/instagramLM.png";
import linkedinIcon from "../assets/linkedinLM.png";

function Contact() {
  return (
    <Window title="Contact">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Hey there, you can email me at{" "}
          <span style={{ color: "#6750A5", fontWeight: 600 }}>alanyusuke@gmail.com</span>
          <br />
          or you can click the button below to open your mail app
        </p>
        <a
          href="mailto:alanyusuke@gmail.com"
          className="contact-email-btn"
        >
          Send me an email
        </a>
        <div style={{ width: "100%", marginTop: "2.5rem" }}>
          <hr />
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1.2rem"
          }}>
            <span style={{ fontWeight: 600, marginBottom: "0.7rem" }}>Socials</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="https://www.linkedin.com/in/yusukesassano/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="contact-social-icon" />
              </a>
              <a href="https://github.com/Sayusk/" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="contact-social-icon" />
              </a>
              <a href="https://www.instagram.com/sayusk_/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="contact-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Contact;
import Window from "../components/Window";
import profilePic from "../assets/Pfp.jpeg";

function About() {
  return (
    <Window title="About Me">
      <div className="about-block">
        <div className="about-profile-row" style={{ marginLeft: "2.5rem" }}>
          <div className="about-profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
          <div>
            <h2 className="about-name">Alan Yusuke Sassano Vilares</h2>
            <div className="about-title">Student and WebDev</div>
          </div>
        </div>
        <hr className="about-hr" />
        <p className="about-presentation">
Hi! I’m Alan, a beginner Web Developer and UI/UX Designer passionate about creating intuitive, visually appealing web experiences. While I’m still building hands-on development experience, I’ve gained valuable IT and technical skills as the sole IT intern at Omnia Brasil, handling tasks like network support, process automation, and employee training. I also have experience in the public sector at Leme City Hall, supporting systems and IT assets.<br/><br/>
I’m in my third year of a Bachelor’s in Information Systems at FHO (Uniararas), and I speak fluent English and basic Japanese. I’m eager to grow professionally in frontend development and UI/UX design, applying my creativity, attention to detail, and ability to deliver practical solutions.<br/><br/>
Even without extensive professional development experience, I’m motivated to take on challenges, learn quickly, and make an impact through my work.</p>      </div>
    </Window>
  );
}

export default About;
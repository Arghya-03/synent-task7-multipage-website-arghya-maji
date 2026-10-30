
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about-page">

      <section className="about-hero">

        <div className="about-label">
          ABOUT THE STUDIO / 02
        </div>

        <h1>
          WE ARE
          <br />
          <span>CREATIVE</span>
          <br />
          BY NATURE.
        </h1>

        <div className="about-intro">
          <p>
            We are an independent creative digital studio
            driven by curiosity, imagination, and the
            belief that great ideas can change everything.
          </p>

          <Link to="/contact" className="primary-btn">
            Work With Us <span>↗</span>
          </Link>
        </div>

      </section>

      <section className="about-story">

        <div className="story-visual">
          <div className="story-shape">
            <span>THINK</span>
            <strong>+</strong>
            <span>CREATE</span>
          </div>
        </div>

        <div className="story-content">
          <span className="section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Creativity is not
            <span> decoration.</span>
            It's our foundation.
          </h2>

          <p>
            We believe meaningful digital experiences
            begin with understanding people. Our approach
            combines thoughtful design, creative thinking,
            and reliable technology to turn ambitious ideas
            into reality.
          </p>

          <p>
            From the first sketch to the final experience,
            we focus on clarity, originality, and purpose.
          </p>
        </div>

      </section>

      <section className="about-stats">

        <div className="stat-card">
          <h3>01<span>+</span></h3>
          <p>Creative Mindset</p>
        </div>

        <div className="stat-card">
          <h3>100<span>%</span></h3>
          <p>Passion for Design</p>
        </div>

        <div className="stat-card">
          <h3>∞</h3>
          <p>Ideas to Explore</p>
        </div>

      </section>

    </main>
  );
};

export default About;


import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home-page">

            <section className="hero">

                <div className="hero-content">

                    <div className="hero-tag">
                        <span className="status-dot"></span>
                        INDEPENDENT CREATIVE DIGITAL STUDIO
                    </div>

                    <h1>
                        WE MAKE
                        <br />
                        IDEAS <span>MATTER.</span>
                    </h1>

                    <p className="hero-description">
                        We build bold digital experiences, unforgettable brands,
                        and creative solutions that move businesses forward.
                    </p>

                    <div className="hero-actions">
                        <Link to="/services" className="primary-btn">
                            Explore Our Work <span>↗</span>
                        </Link>

                        <Link to="/about" className="secondary-btn">
                            Discover Studio
                        </Link>
                    </div>

                </div>

                <div className="hero-visual">

                    <div className="visual-circle">
                        <div className="circle-inner">
                            <span>CREATE</span>
                            <strong>∞</strong>
                            <span>INSPIRE</span>
                        </div>
                    </div>

                    <div className="floating-card">
                        <span>OUR MINDSET</span>
                        <h3>Think different.<br />Create better.</h3>
                        <div className="card-arrow">↗</div>
                    </div>

                    <div className="visual-number">01 / 04</div>

                </div>

                <div className="hero-bottom">
                    <span>CREATIVITY WITHOUT LIMITS</span>
                    <span>SCROLL TO EXPLORE ↓</span>
                </div>

            </section>


            <section className="services-preview">

                <div className="section-heading">
                    <span>WHAT WE DO / 01</span>
                    <h2>
                        GOOD IDEAS.
                        <br />
                        <span>GREAT EXECUTION.</span>
                    </h2>
                    <p>
                        We combine creativity, technology, and strategy
                        to create digital experiences that make an impact.
                    </p>
                </div>

                <div className="service-grid">

                    <div className="service-card">
                        <span className="service-number">01</span>
                        <div className="service-icon">✳</div>
                        <h3>Brand Identity</h3>
                        <p>
                            Building unique brand identities that
                            communicate your story and vision.
                        </p>
                        <span className="service-arrow">↗</span>
                    </div>

                    <div className="service-card">
                        <span className="service-number">02</span>
                        <div className="service-icon">◈</div>
                        <h3>Web Design</h3>
                        <p>
                            Designing beautiful, responsive digital
                            experiences for modern businesses.
                        </p>
                        <span className="service-arrow">↗</span>
                    </div>

                    <div className="service-card">
                        <span className="service-number">03</span>
                        <div className="service-icon">⌘</div>
                        <h3>Development</h3>
                        <p>
                            Turning ambitious ideas into fast,
                            functional, and scalable websites.
                        </p>
                        <span className="service-arrow">↗</span>
                    </div>

                </div>

            </section>


        </main>
    );
};

export default Home;

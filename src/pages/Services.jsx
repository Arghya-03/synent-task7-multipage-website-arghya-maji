
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      number: "01",
      icon: "✳",
      title: "Brand Identity",
      description:
        "We create memorable visual identities that communicate your brand's personality, values, and vision."
    },
    {
      number: "02",
      icon: "◈",
      title: "Web Design",
      description:
        "We design beautiful, user-friendly, and responsive websites that turn visitors into customers."
    },
    {
      number: "03",
      icon: "⌘",
      title: "Web Development",
      description:
        "We develop fast, scalable, and functional digital experiences using modern web technologies."
    },
    {
      number: "04",
      icon: "✦",
      title: "Creative Strategy",
      description:
        "We combine research, creativity, and strategic thinking to help businesses stand out."
    }
  ];

  return (
    <main className="services-page">

      <section className="services-hero">

        <span className="services-label">
          WHAT WE OFFER / 03
        </span>

        <h1>
          OUR WORK.
          <br />
          <span>YOUR VISION.</span>
        </h1>

        <p>
          From the first idea to the final experience,
          we turn ambitious visions into meaningful
          digital solutions.
        </p>

      </section>

      <section className="services-list">

        {services.map((service) => (
          <div className="service-detail-card" key={service.number}>

            <span className="detail-number">
              {service.number}
            </span>

            <span className="detail-icon">
              {service.icon}
            </span>

            <div className="detail-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>

            <span className="detail-arrow">↗</span>

          </div>
        ))}

      </section>

      <section className="services-cta">

        <span>HAVE A PROJECT IN MIND?</span>

        <h2>
          LET'S MAKE
          <br />
          <span>IT HAPPEN.</span>
        </h2>

        <Link to="/contact" className="primary-btn">
          Start a Conversation <span>↗</span>
        </Link>

      </section>

    </main>
  );
};

export default Services;

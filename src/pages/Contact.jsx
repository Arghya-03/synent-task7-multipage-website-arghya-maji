
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="contact-page">

      <section className="contact-hero">

        <span className="contact-label">
          GET IN TOUCH / 04
        </span>

        <h1>
          LET'S START
          <br />
          <span>SOMETHING GREAT.</span>
        </h1>

        <p>
          Have an idea, a project, or just want to say hello?
          We'd love to hear from you.
        </p>

      </section>

      <section className="contact-content">

        <div className="contact-info">

          <span className="section-label">
            CONTACT INFORMATION
          </span>

          <h2>
            Let's make
            <span> something happen.</span>
          </h2>

          <p>
            Tell us what you're thinking. Every great
            collaboration starts with a conversation.
          </p>

          <div className="contact-detail">
            <span>EMAIL</span>
            <p>hello@creativestudio.com</p>
          </div>

          <div className="contact-detail">
            <span>LOCATION</span>
            <p>West Bengal, India</p>
          </div>

          <div className="contact-detail">
            <span>WORKING HOURS</span>
            <p>Monday – Saturday · 10 AM – 6 PM</p>
          </div>

        </div>

        <div className="contact-form-wrapper">

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">YOUR MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="primary-btn">
              Send Message <span>↗</span>
            </button>

            {submitted && (
              <p className="success-message">
                Thank you! Your message has been submitted successfully.
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  );
};

export default Contact;

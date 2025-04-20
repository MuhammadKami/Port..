import React, { useState } from 'react';
import './App.css';
import './Contact.css';
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  const tabLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const contactInfo = [
    { icon: "icon1.png", label: "Email", value: "mukamranatt@gmail.com" },
    { icon: "icon2.png", label: "Phone", value: "03322935294" },
    { icon: "icon3.png", label: "Location", value: "Karachi, Pakistan" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show snackbar
    setShowSnackbar(true);

    // Redirect after 3 seconds
    setTimeout(() => {
      setShowSnackbar(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="app-container bg-black text-light min-vh-100 p-4">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}
          <aside className="col-md-4">
            <div className="card bg-dark text-center text-light p-4 shadow">
              <img src="KKK.jpg" alt="Muhammad Kamran" className="profile-img mb-3" height="100" />
              <h4 className="fw-bold">Muhammad Kamran</h4>
              <span className="badge bg-secondary m-3 p-2">MERN Stack Developer</span>
              <hr />
              <ul className="list-unstyled text-start small">
                {contactInfo.map((info, i) => (
                  <li key={i} className="mb-3 d-flex align-items-start">
                    <img src={info.icon} alt={`${info.label} icon`} className="icon me-3 mt-1" />
                    <div>
                      <p className="m-0 fw-semibold text-warning">{info.label}:</p>
                      <p className="m-0 text-white-50">{info.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center gap-3 mt-3 social-icons fs-4">
                <a
                  href="https://linkedin.com/in/muhammad-kamran-97049b2a3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin text-warning"></i>
                </a>
                <a
                  href="https://github.com/MuhammadKami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github text-warning"></i>
                </a>
                <a
                  href="https://www.instagram.com/muhammadkamran5135/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram text-warning"></i>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-md-8">
            <div className="card bg-dark text-light rounded-4 shadow p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h2 className="text-warning mb-0">Contact</h2>
                <ul className="nav">
                  {tabLinks.map((tab, idx) => (
                    <li key={idx} className="nav-item mx-2">
                      <Link
                        to={tab.path}
                        className={`nav-link px-2 ${
                          location.pathname === tab.path
                            ? "active-tab text-warning border-bottom border-warning border-2"
                            : "text-light"
                        }`}
                      >
                        {tab.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <div className="container">
                <div className="mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.230115580352!2d67.00113823052148!3d24.860734451339763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9096b84cbd%3A0x54dfc7ccadcae8c5!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2snp!4v1713525454325!5m2!1sen!2snp" 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>

                <h3 className="fw-lighter mb-3">Contact Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Full name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email address" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom">
                    <i className="bi bi-send-fill"></i> Send Message
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="snackbar">
          Thank you for contacting, I will contact you shortly.
        </div>
      )}
    </div>
  );
}

export default Contact;

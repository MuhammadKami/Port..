import React from "react";
import "./App.css";
import { Link, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const tabLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      title: "Frontend Development",
      desc: "Responsive Web Designs .",
      icon: "📱",
    },
    {
      title: "Web Development",
      desc: "High-quality website development.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      desc: "Modern and high-quality designs.",
      icon: "🎨",
    },
    {
      title: "Backend Dev",
      desc: "High-performance backend services.",
      icon: "🧠",
    },
  ];

  const skills = [
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  ];

  const contactInfo = [
    { icon: "icon1.png", label: "Email", value: "mukamranatt@gmail.com" },
    { icon: "icon2.png", label: "Phone", value: "03322935294" },
    { icon: "icon3.png", label: "Location", value: "Karachi, Pakistan" },
  ];

  return (
    <div className="app-container bg-black text-light min-vh-100 p-4">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}
          <aside className="col-md-4" style={{ backgroundPosition: "fixed" }}>
            <div className="card bg-dark text-center text-light p-4  shadow">
              <img
                src="KKK.jpg"
                alt="Muhammad Kamran"
                className="profile-img mb-3 "
                height="100"
              />
              <h4 className="fw-bold">Muhammad Kamran</h4>
              <span className="badge bg-secondary m-3 p-2">
                MERN Stack Developer
              </span>
              <hr />
              <ul className="list-unstyled text-start small">
                {contactInfo.map((info, i) => (
                  <li key={i} className="mb-3 d-flex align-items-start">
                    <img
                      src={info.icon}
                      alt={`${info.label} icon`}
                      className="icon me-3 mt-1"
                    />
                    <div>
                      <p className="m-0 fw-semibold text-warning">
                        {info.label}:
                      </p>
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
              {/* Navbar Tabs */}
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h2 className="text-warning mb-0">About Me</h2>
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

              {/* About Text */}
              <div className="about-section kahani">
                <p>
                  Hi, I’m Kamran – a passionate Web Developer and the founder of
                  Kamani Services, where creativity meets technology. With a
                  strong foundation in the MERN stack and a keen eye for design,
                  I craft powerful, user-friendly websites that not only look
                  good but perform flawlessly.
                </p>
                <p>
                  From dynamic e-commerce platforms and portfolio websites to
                  custom web applications, I bring ideas to life using modern
                  technologies like MongoDB, Express.js, React, and Node.js. I
                  believe in building clean, scalable, and secure web solutions
                  tailored to each client’s vision.
                </p>
                <p>
                  Whether you're a startup, business, or an individual looking
                  to establish a strong online presence, I’m here to help turn
                  your ideas into digital reality. Let’s build something amazing
                  together!
                </p>
              </div>

              {/* What I'm Doing */}
              <h3 className="mt-4 text-warning">What I'm Doing</h3>
              <div className="row row-cols-1 row-cols-md-2 g-3 mt-2 kahani">
                {services.map((item, i) => (
                  <div className="col" key={i}>
                    <div className="bg-dark p-3 rounded-3 shadow-sm h-100 border border-secondary">
                      <h6 className="fw-semibold">
                        {item.icon} {item.title}
                      </h6>
                      <p className="small text-white-50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <section
                style={{
                  padding: "2rem",
                  background: "#1f1f1f",
                  borderRadius: "1rem",
                  marginTop: "2rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffc107",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  My Skills
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#2c2c2c",
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 0 15px #ffc10755";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "0.8rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;

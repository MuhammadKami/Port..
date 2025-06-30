import React from 'react'
import "./App.css";
import { Link, useLocation } from "react-router-dom";

function Resume() {
  const location = useLocation();
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

  return (
    <div className="app-container bg-black text-light min-vh-100 p-4">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}
          <aside className="col-md-4">
            <div className="card bg-dark text-center text-light p-4  shadow">
              <img
                src="KKK.jpg"
                alt="Muhammad Kamran"
                className="profile-img mb-3 "
                height="100"
              />
              <h4 className="fw-bold">Muhammad Kamran</h4>
              <span className="badge bg-secondary m-3 p-2 fe-lighter">MERN Stack Developer</span>
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
          <main className="col-md-8 kahani">
            <div className="card bg-dark text-light rounded-4 shadow p-4 kahani">
              {/* Navbar Tabs */}
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h2 className="text-warning mb-0">Resume</h2>
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
              <div className="bg-dark p-4 rounded-4 text-align-left">
                {/* Education Section */}
                <h4 className="text-warning">Summary</h4>
                
                <p className="text-white-50 mb-1"> MERN Stack Developer and Web Designer with expertise in building scalable web applications, e
commerce platforms, and real-time features using WebRTC and Socket.io. Skilled in MongoDB,
 Express.js, React, Node.js, and backend optimization.</p>

                {/* Experience Section */}
                <h4 className="text-warning">Experience</h4>
                <div className="mb-4">
                  <h6 className="text-light">Web Developer (Intern) | CodSoft</h6>
                  <p className="text-white-50 mb-1">JJuly 2024 - Aug 2024</p>
                  <ul className="text-white-50 small">
                    <li>Built responsive web applications using HTML, CSS, JavaScript, and React.js.</li>
                    <li>Assisted in backend development using Node.js and Express.js.</li>
                    <li>Gained hands-on experience in debugging and optimizing web applications.</li>
                  </ul>

                  <h6 className="text-light mt-4"> MERN Stack Developer | Freelance & Personal Projects</h6>
                  <p className="text-white-50 mb-1"> Aug 2024 | Present</p>
                  <ul className="text-white-50 small">
                    <li>Developed a hotel booking website and a MERN stack e
                    commerce platform.</li>
                    <li> Built issue management functionality and real-time
                    communication features using WebRTC and Socket.io.</li>
                    <li>Developed reusable components and optimized state management.</li>
                  </ul>
                </div>

                <div className="text-end">
                  <a href="/Final 2.pdf" className="btn btn-warning btn-sm">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Resume;

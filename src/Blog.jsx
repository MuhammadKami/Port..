import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Blog() {
  const tabLinks = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    {
      title: "Mobile Apps",
      desc: "Professional development of Android & iOS apps.",
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
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    "https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png",
    "https://cdn.iconscout.com/icon/free/png-256/firebase-3521427-2944871.png",
    "https://cdn.iconscout.com/icon/free/png-256/dart-3550844-2978120.png",
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
                className="profile-img mb-3 e"
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
                <h2 className="text-warning mb-0">Blog</h2>
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
              <p className="kahani text-light paragraph">
                📄 Blog Post: "Why Responsive Design Matters in Web Development"
                <br />
                Date: April 19, 2025 <br />
                Author:<i> Kamran – Web Developer @ Kamani Services</i>
                <br />
                🔹 Introduction In today’s digital world, users visit websites
                from a variety of devices—smartphones, tablets, laptops, even
                smart TVs. A website that looks perfect on a desktop but breaks
                on a phone? That’s a problem. This is where responsive design
                steps in.
                <br />
                🔹 What is Responsive Design? Responsive design ensures your
                website adapts to different screen sizes, providing an optimal
                user experience no matter what device it's being viewed on. It
                uses flexible grids, images, and CSS media queries to adjust
                layout and content dynamically.
                <br />
                🔹 Why It Matters Better User Experience (UX): Visitors stay
                longer on sites that are easy to navigate and read. Improved
                SEO: Google prioritizes mobile-friendly sites in search results.
                Faster Load Times: Well-designed responsive sites load faster,
                especially on mobile networks. Cost-Efficient: One codebase for
                all devices means less maintenance. Professionalism: A
                responsive website builds trust and credibility.
                <br />
                🔹 How to Get Started Use relative units like em, %, vh, and vw
                instead of px. Implement media queries in CSS. Test your site on
                tools like Chrome DevTools or responsivedesignchecker.com.
                Consider using flexbox or CSS grid for layouts. Frameworks like
                Bootstrap make responsiveness easier.
                <br />
                🔹 Final Thoughts Responsive design isn’t just a trend—it’s a
                must. Whether you're building a portfolio, e-commerce site, or
                blog, making it responsive ensures your users get a consistent
                and friendly experience across all platforms.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Blog;

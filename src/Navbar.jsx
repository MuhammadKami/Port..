import React from 'react'
import './App.css'
function Navbar() {
    
  const contactInfo = [
    { icon: "icon1.png", label: "Email", value: "mukamranatt@gmail.com" },
    { icon: "icon2.png", label: "Phone", value: "03322935294" },
    { icon: "icon3.png", label: "Location", value: "Karachi, Pakistan" },
  ];
  return (
    <div className="app-container bg-black text-light min-vh-100 p-4">
    <aside className="col-md-4">
    <div className="card bg-dark text-center text-light p-4 rounded-4 shadow">
      <img src="KKK.jpg" alt="Muhammad Kamran" className="profile-img mb-3 rounded-circle" height="100" />
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
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitter"></i>
      </div>
    </div>
  </aside>
  </div>
  )
}

export default Navbar
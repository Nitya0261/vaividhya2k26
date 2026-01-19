import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enrollment: "",
    college: "",
    department: "",
    year: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function generateRegId() {
    const random = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase();
    return `VAIVIDHYA-2026-${random}`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const allRegistrations =
      JSON.parse(localStorage.getItem("allRegistrations")) || [];

    const alreadyExists = allRegistrations.some(
      reg => reg.enrollment === formData.enrollment
    );

    if (alreadyExists) {
      alert("This enrollment number is already registered.");
      return;
    }

    const registrationData = {
      regId: generateRegId(),
      ...formData,
      events: [],
      totalAmount: 0,
      paymentStatus: "UNPAID",
      createdAt: new Date().toISOString(),
    };

    // Save current registration
    localStorage.setItem(
      "registration",
      JSON.stringify(registrationData)
    );

    // Save for duplicate check
    allRegistrations.push(registrationData);
    localStorage.setItem(
      "allRegistrations",
      JSON.stringify(allRegistrations)
    );

    navigate("/register/events");
  }

  return (
    <>
      <Navbar />

      <div className="register-wrapper">
        <div className="register-bg"></div>

        <div className="register-card">
          <h1 className="event-name">
            VAIVIDHYA <span>2K26</span>
          </h1>

          <h2 className="register-title">
            Student <span>Registration</span>
          </h2>

          <p className="register-subtitle">
            National Level Technical & Non-Technical Fest
          </p>

          <form onSubmit={handleSubmit} className="register-form">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

<input
  name="enrollment"
  placeholder="Enrollment Number"
  onChange={handleChange}
  required
/>
            <input
              name="college"
              placeholder="College Name"
              onChange={handleChange}
              required
            />

            <input
              name="department"
              placeholder="Department"
              onChange={handleChange}
              required
            />

            <input
              name="year"
              placeholder="Year (e.g. 2nd Year)"
              onChange={handleChange}
              required
            />

            <button type="submit" className="register-btn">
              Proceed to Event Selection →
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import poster from "../assets/poster.jpg";

function Receipt() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("registration");
    if (!stored) {
      navigate("/register");
    } else {
      setData(JSON.parse(stored));
    }
  }, [navigate]);

  if (!data) return null;

  return (
    <>
      <Navbar />

      <div className="receipt-wrapper">
        <div className="receipt-card">

          {/* Poster */}
          <div className="receipt-poster">
            <img src={poster} alt="Event Poster" />
          </div>

          {/* Title */}
          <h2 className="receipt-title">Registration Receipt</h2>

          {/* Registration ID */}
          <div className="receipt-row highlight">
            <span>Registration ID</span>
            <strong>{data.regId}</strong>
          </div>

          {/* Student Info */}
          <div className="receipt-section">
            <h3>Student Details</h3>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>College:</strong> {data.college}</p>
            <p><strong>Department:</strong> {data.department}</p>
            <p><strong>Year:</strong> {data.year}</p>
          </div>

          {/* Events */}
          <div className="receipt-section">
            <h3>Selected Events</h3>
            {data.events.map((event, index) => (
              <div key={index} className="receipt-row">
                <span>{event.name}</span>
                <span>₹{event.fee}</span>
              </div>
            ))}

            <div className="receipt-row total">
              <strong>Total Amount</strong>
              <strong>₹{data.totalAmount}</strong>
            </div>
          </div>

          {/* Payment Status */}
          <div className={`payment-status ${data.paymentStatus.toLowerCase()}`}>
            Payment Status: {data.paymentStatus}
          </div>

          {/* Instructions */}
          <div className="receipt-note">
            Please complete offline payment at the registration desk
            by showing this receipt and your Registration ID.
          </div>

          {/* Print */}
          <button onClick={() => window.print()} className="print-btn">
            Print Receipt
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Receipt;

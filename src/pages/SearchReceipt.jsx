import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SearchReceipt() {
  const [enrollment, setEnrollment] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const allRegistrations =
      JSON.parse(localStorage.getItem("allRegistrations")) || [];

    const found = allRegistrations.find(
      reg => reg.enrollment === enrollment
    );

    if (!found) {
      setError("No registration found for this enrollment number.");
      setResult(null);
      return;
    }

    setResult(found);
    setError("");
  }

  return (
    <>
      <Navbar />

      <section className="search-receipt-page">
        <div className="search-receipt-container">

          <h1>Find Your Receipt</h1>
          <p>Enter your enrollment number to view your receipt</p>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Enter Enrollment Number"
              value={enrollment}
              onChange={e => setEnrollment(e.target.value)}
              required
            />
            <button type="submit">Search</button>
          </form>

          {error && <p className="error-text">{error}</p>}

          {result && (
            <div className="receipt-card">
              <h2>Receipt</h2>

              <p><strong>Registration ID:</strong> {result.regId}</p>
              <p><strong>Name:</strong> {result.name}</p>
              <p><strong>Enrollment:</strong> {result.enrollment}</p>
              <p><strong>College:</strong> {result.college}</p>

              <h3>Selected Events</h3>
              <ul>
                {result.events.map((event, index) => (
                  <li key={index}>
                    {event.name} – ₹{event.fee}
                  </li>
                ))}
              </ul>

              <p className="total">
                <strong>Total Amount:</strong> ₹{result.totalAmount}
              </p>

              <p className="status">
                <strong>Status:</strong> {result.paymentStatus}
              </p>

              <button onClick={() => window.print()}>
                Print Receipt
              </button>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default SearchReceipt;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import eventsData from "../data/eventsData";

function Events() {
  const technicalEvents = eventsData.filter(
    event => event.category === "Technical"
  );

  const nonTechnicalEvents = eventsData.filter(
    event => event.category === "Non-Technical"
  );

  return (
    <>
      <Navbar />

      <section className="events-page">

        {/* TECHNICAL EVENTS */}
        <section className="events-block technical">
          <div className="events-block-header">
            <h1>Technical Events</h1>
            <p>Engineering • Coding • Robotics • Innovation</p>
          </div>

          <div className="events-grid">
            {technicalEvents.map(event => (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
                className="event-card-link"
              >
                <div className="event-card">
                  <img src={event.poster} alt={event.name} />

                  <div className="event-info">
                    <h3>{event.name}</h3>
                    <span className="fee">₹{event.fee}</span>

                    <button className="event-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NON-TECHNICAL EVENTS */}
        <section className="events-block non-technical">
          <div className="events-block-header">
            <h1>Non-Technical Events</h1>
            <p>Gaming • Fun • Creativity • Entertainment</p>
          </div>

          <div className="events-grid">
            {nonTechnicalEvents.map(event => (
              <Link
                key={event.id}
                to={`/events/${event.slug}`}
                className="event-card-link"
              >
                <div className="event-card">
                  <img src={event.poster} alt={event.name} />

                  <div className="event-info">
                    <h3>{event.name}</h3>
                    <span className="fee">₹{event.fee}</span>

                    <button className="event-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </section>

      <Footer />
    </>
  );
}

/* ✅ THIS LINE IS CRITICAL */
export default Events;
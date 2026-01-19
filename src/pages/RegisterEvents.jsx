import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import eventsData from "../data/eventsData";


function RegisterEvents() {
  const FREE_EVENT_SLUG = "free-fun-event";

const freeEvent = eventsData.find(
  event => event.isFreeEvent === true
);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedEvent = searchParams.get("event");

  const [selectedEvents, setSelectedEvents] = useState([]);

  // Auto-select event if coming from EventDetails page
  useEffect(() => {
    if (preselectedEvent) {
      setSelectedEvents([preselectedEvent]);
    }
  }, [preselectedEvent]);

  function toggleEvent(slug) {
  setSelectedEvents(prev => {
    const isFreeEvent = slug === FREE_EVENT_SLUG;

    const paidEventsCount = prev.filter(
      e => e !== FREE_EVENT_SLUG
    ).length;

    // UNSELECT
    if (prev.includes(slug)) {
      return prev.filter(e => e !== slug);
    }

    // FREE EVENT RULE
    if (isFreeEvent) {
      if (paidEventsCount < 2) {
        alert("Select at least 2 paid events to unlock the free event.");
        return prev;
      }

      if (prev.includes(FREE_EVENT_SLUG)) {
        return prev;
      }
    }

    // MAX EVENTS RULE (2 paid + 1 free)
    if (!isFreeEvent && paidEventsCount >= 2) {
      alert("You can select only 2 paid events.");
      return prev;
    }

    return [...prev, slug];
  });
}



  function handleProceed() {
    const selectedEventObjects = eventsData.filter(event =>
      selectedEvents.includes(event.slug)
    );
// Separate paid events (ignore free)
const paidEvents = selectedEventObjects.filter(
  event => event.fee > 0
);

// Check special offer: 3 events of ₹50
const allThreeAre50 =
  paidEvents.length === 3 &&
  paidEvents.every(event => event.fee === 50);

let totalAmount = 0;

if (allThreeAre50) {
  totalAmount = 120; // special combo price
} else {
  totalAmount = paidEvents.reduce(
    (sum, event) => sum + event.fee,
    0
  );
}


    const stored = JSON.parse(localStorage.getItem("registration"));

    const updatedRegistration = {
      ...stored,
      events: selectedEventObjects,
      totalAmount,
    };

    localStorage.setItem(
      "registration",
      JSON.stringify(updatedRegistration)
    );

    navigate("/register/receipt");
  }
const technicalEvents = eventsData.filter(
  e => e.category === "Technical" && !e.isFreeEvent
);

const nonTechnicalEvents = eventsData.filter(
  e => e.category === "Non-Technical" && !e.isFreeEvent
);



  // const technicalEvents = eventsData.filter(
  //   e => e.category === "Technical"
  // );
  // const nonTechnicalEvents = eventsData.filter(
  //   e => e.category === "Non-Technical"
  // );

  return (
    <>
      <Navbar />

      <section className="event-selection-page">
        <div className="event-selection-container">

          <h1>Select Your Events</h1>
          <p className="event-limit-info ">
  🎉 Buy any 2 events & get 1 FREE event (limited entry)
</p>

<p className="event-limit-info ">
  
           🎉 Special Offer: Select any 3 ₹50 events for just ₹120
</p>

{/* TECHNICAL EVENTS */}
<h2 className="event-category-title">Technical Events</h2>
<div className="event-select-grid">
  {technicalEvents.map(event => (
    <label
      key={event.id}
      className={`event-select-card ${
        selectedEvents.includes(event.slug) ? "selected" : ""
      }`}
    >
      <input
  type="checkbox"
  checked={selectedEvents.includes(event.slug)}
  disabled={
    // disable paid events if already 2 selected
    (!event.isFreeEvent &&
      selectedEvents.filter(e => e !== FREE_EVENT_SLUG).length >= 2 &&
      !selectedEvents.includes(event.slug)) ||

    // disable free event if less than 2 paid selected
    (event.isFreeEvent &&
      selectedEvents.filter(e => e !== FREE_EVENT_SLUG).length < 2)
  }
  onChange={() => toggleEvent(event.slug)}
/>



      <img src={event.poster} alt={event.name} />

      <h3>{event.name}</h3>
      <p className="event-category">Technical</p>
      <p className="event-fee">₹{event.fee}</p>
    </label>
  ))}
</div>

{/* NON-TECHNICAL EVENTS */}
<h2 className="event-category-title">Non-Technical Events</h2>
<div className="event-select-grid">
  {nonTechnicalEvents.map(event => (
    <label
      key={event.id}
      className={`event-select-card ${
        selectedEvents.includes(event.slug) ? "selected" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={selectedEvents.includes(event.slug)}
        onChange={() => toggleEvent(event.slug)}
      />

      <img src={event.poster} alt={event.name} />

      <h3>{event.name}</h3>
      <p className="event-category">Non-Technical</p>
      <p className="event-fee">₹{event.fee}</p>
    </label>
  ))}
</div>
 {/* ✅ FREE EVENT SECTION (INSIDE RETURN) */}
          {freeEvent && (
            <div className="free-event-section event-select-card free-event">
              <h2>🎁 Free Event</h2>

              <label className="event-select-card free-event">
                <input
                  type="checkbox"
                  checked={selectedEvents.includes(freeEvent.slug)}
                  disabled={
                    selectedEvents.filter(e => e !== FREE_EVENT_SLUG).length < 2
                  }
                  onChange={() => toggleEvent(freeEvent.slug)}
                />
                <img src={freeEvent.poster} alt={freeEvent.name} />
                <h3>{freeEvent.name}</h3>
                <p className="free-badge">FREE</p>
              </label>
            </div>
          )}
          <div className="proceed-btn-wrapper">
  

  <button
    className="proceed-btn"
    disabled={selectedEvents.length === 0}
    onClick={handleProceed}
  >
    Proceed to Receipt →
  </button>
</div>


        </div>
      </section>

      <Footer />
    </>
  );
}

export default RegisterEvents;

import { useEffect, useState } from "react";
import API from "../api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => {
      setEvents(res.data);
    });
  }, []);

  return (
    <div>
      {events.map(e => (
        <div key={e.event_id}>
          {e.event_name} - ₹{e.price}
        </div>
      ))}
    </div>
  );
}

export default Events;
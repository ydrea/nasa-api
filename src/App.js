import "./App.css";
import Mapa from "./comps/Mapa";
import { useState, useEffect } from "react";
import Spinner from "./comps/Spinner";
function App() {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      console.log(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return (
    <div className="App">
      {!loading ? <Mapa eventData={eventData} /> : <Spinner />}
    </div>
  );
}

export default App;

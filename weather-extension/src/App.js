import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState("");
  const apiKey = "YOUR_API_KEY";

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      // Fetch weather data
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
        );
        setTemperature(response.data.main.temp);
        setCity(response.data.name);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    });
  }, []);

  return (
    <div style={{ padding: "10px", width: "200px" }}>
      <h3>Current Temperature</h3>
      {temperature && city ? (
        <p>
          {city}: {temperature}°C
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

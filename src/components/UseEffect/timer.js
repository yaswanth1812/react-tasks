import React, { useEffect, useState } from "react";

const RealTimeEx = ({ timezoneOffset }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      const currentTime = new Date();
      const adjustedTime = new Date(
        currentTime.getTime() + timezoneOffset * 60000
      ); // Adjust time based on timezone offset
      setTime(adjustedTime);
    }, 1000);

    return () => clearInterval(timerID);
  }, [timezoneOffset]); // Effect depends on timezoneOffset

  return (
    <div>
      <h1>Real-Time Clock</h1>
      <p>Current Time: {time.toLocaleString()}</p>
    </div>
  );
};

export default RealTimeEx;

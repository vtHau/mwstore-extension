import React, { useState, useEffect } from "react";

function Home(props) {
  const [timeClock, setTimeClock] = useState("04:33:16 PM");

  useEffect(() => {
    const setUpdateTime = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let day_night = "AM";
      if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      const time = hours + ":" + minutes + ":" + seconds + " " + day_night;
      setTimeClock(time);
    }, 500);

    return () => {
      clearInterval(setUpdateTime);
    };
  }, []);

  return (
    <div className="page-trans">
      <div className="wrapper">
        <div className="display">
          <div id="time">{timeClock}</div>
        </div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [start, setStart] = useState(false);
  let sectimerid;
  let miliSecTimerId;

  useEffect(() => {
    if (start) {
      sectimerid = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      miliSecTimerId = setInterval(() => {
        setMiliSeconds((miliSeconds) =>
          miliSeconds >= 99 ? 0 : miliSeconds + 1
        );
      }, 10);
    } else {
      clearInterval(sectimerid);
      clearInterval(miliSecTimerId);
    }

    return () => {
      clearInterval(sectimerid);
      clearInterval(miliSecTimerId);
    };
  }, [start]);

  const handleStart = () => setStart(true);

  const handleStop = () => setStart(false);

  const handleReset = () => {
    setSeconds(0);
    setMiliSeconds(0);
  };

  return (
    <div>
      <p>
        {seconds} : {miliSeconds}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

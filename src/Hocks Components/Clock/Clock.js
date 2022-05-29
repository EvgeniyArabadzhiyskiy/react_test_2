import { useEffect, useRef, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Очистка перед следующим вызовом useEffect");
      stop();
    };
  }, []);

  const stop = (e) => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default Clock;

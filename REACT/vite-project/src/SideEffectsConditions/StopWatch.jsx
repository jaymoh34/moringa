/*
  start ,stop ,reset()
*/

import { useEffect, useState } from "react";

function Stopwatch() {
  const [isStopped, setIsStopped] = useState(true);
  const [k, setK] = useState(0); //times we have started and stopped the timmer

  //tracking depedencies
  useEffect(() => {
    if (isStopped === false) {
      setK(k + 1);
    }
  }, [isStopped]);

  return (
    <div>
      <div>
        <button onClick={() => setIsStopped(false)}>Start</button>
        <button onClick={() => setIsStopped(true)}>Stop</button>
      </div>
      <div>Start clicked how many times {k}</div>
      <ShowTimer isStopped={isStopped} k={k} />
    </div>
  );
}

function ShowTimer({ isStopped, k }) {
  if (isStopped) {
    return null;
  }
  return <Timer k={k} />;
}

function Timer({ k }) {
  const [time, setTime] = useState(0);

  //born
  //interval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("for k is", k, "time is ", time);
      setTime((c) => c + 1);
      //previous state
    }, 1000);
    //memory leakage
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <b>{time}</b>
    </div>
  );
}

export default Stopwatch;
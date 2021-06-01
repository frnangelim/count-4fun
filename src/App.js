import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const countDownDate = new Date("06/11/2021").getTime();

function App() {
  const [customInterval, setCustomInterval] = useState(null);
  const [time, setTime] = useState({
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
  });
  const [theEnd, setTheEnd] = useState(false);

  useEffect(() => {
    startCounter();
    return () => {
      clearInterval(customInterval);
    };
  }, []);

  const startCounter = () => {
    const interval = setInterval(timer, 1000);
    setCustomInterval(interval);
  };

  const timer = () => {
    const timeRemaining = countDownDate - new Date().getTime();
    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    } else {
      clearInterval(customInterval);
      setTheEnd(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-1" />
        <div className="bg-2" />
        <div className="bg-3" />
        <div className="bg-4" />

        <div className={"content"}>
          {theEnd ? (
            <h1>PARTIU PRAIA CARAE!</h1>
          ) : (
            <>
              <div>
                <h1>Contagem para o fim da depressão</h1>
              </div>
              <div>
                {time.seconds != null ? (
                  <h2>
                    {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
                  </h2>
                ) : (
                  <Loader />
                )}
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

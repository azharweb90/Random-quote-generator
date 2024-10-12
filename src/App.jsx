import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { quotes } from "./components/QuotesGenerator/quotes";
import Counter from "./components/Counter/Counter";
import InspirationalQuotes from "./components/QuotesGenerator";
import "./css/button.css";
import "./components/Counter/Counter.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => (prevCount + 1) % quotes.length);
  }

  function handleDecrement() {
    setCount((prevCount) =>
      prevCount > 0 ? (prevCount - 1) % quotes.length : prevCount
    );
  }

  const quotesCount = quotes.length - 1;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Counter count={count} />
      <InspirationalQuotes count={count} />
      <div className="btns-wrapper">
        <button
          className={`btn ${count === 0 ? "btn-disabled" : "btn-primary"}`}
          onClick={handleDecrement}
          disabled={count === quotes[0]}
        >
          &lt;
        </button>
        <button
          className={`btn ${
            count === quotesCount ? "btn-disabled" : "btn-primary"
          }`}
          onClick={handleIncrement}
          disabled={count === quotesCount}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default App;

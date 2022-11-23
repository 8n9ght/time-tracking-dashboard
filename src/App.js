import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <>
      <div className="container">
        <div className="core">
          <article className="infoTab">
            <span className="heading">Report for</span>
            <h2>Jeremy Robson</h2>
          </article>
          <article className="filterTab">
            <p className="filter">Daily</p>
            <p className="filter">Weekly</p>
            <p className="filter">Monthly</p>
          </article>
        </div>

        <div className="tabContainer">
          <Tabs />
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/8n9ght" rel="noreferrer" target="_blank">
          8n9ght
        </a>
        .
      </div>
    </>
  );
}

export default App;

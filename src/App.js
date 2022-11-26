import "./App.css";
import Tabs from "./Tabs";
import profilePicture from './images/image-jeremy.png';
import {useState} from 'react'

function App() {

  const [filter, setFilter] = useState('Daily')
  
  const handleToggle = (e) => {
    const currentState = e.target.innerHTML
    setFilter(currentState)
  }

  return (
    <>
      <div className="container">
        <div className="core">
          <article className="infoTab">
            <img src={profilePicture} alt="Profile avatar" className="profile"/>
            <span className="heading">Report for</span>
            <p className="person">Jeremy Robson</p>
          </article>
          <article className="filterTab">
            <p className="filter" onClick={handleToggle}>Daily</p>
            <p className="filter" onClick={handleToggle}>Weekly</p>
            <p className="filter" onClick={handleToggle}>Monthly</p>
          </article>
        </div>

        <div className="tabContainer">
          <Tabs filter={filter}/>
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

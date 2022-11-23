import { useEffect } from "react";
import data from "./data.json";
import exercise from './images/icon-exercise.svg'
import play from './images/icon-play.svg'
import selfCare from './images/icon-self-care.svg'
import social from './images/icon-social.svg'
import study from './images/icon-study.svg'
import work from './images/icon-work.svg'

export default function Tabs() {



  const colors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
  ]

  const bgImage = [
    work,
    play,
    study,
    exercise,
    social,
    selfCare
  ]

  useEffect(() => {
    
  }, [])



  return (
    <>
      {data.map((tab, index) => {
            return (
              <div className="tabHeader" key={index} style={{backgroundImage: `url(${bgImage[index]})`, backgroundColor: colors[index], backgroundRepeat  : 'no-repeat', backgroundPositionX: 140, backgroundPositionY: 0, backgroundSize: '30%'}}>
                <article className="tabInfos">
                  <span className="tabIntro">
                    <p className="tabTitle">{tab.title}</p>
                    <p className="tabCta"></p>
                  </span>
    
                  <article className="tabHours">
                    {tab.timeframes.weekly.current}hrs
                  </article>
                  <article className="tabData">
                    Last Week - {tab.timeframes.weekly.previous}hrs
                  </article>
                </article>
              </div>
            );
      })}
    </>
  );
}

import { useEffect } from "react";
import data from "./data.json";
import elipse from './images/icon-ellipsis.svg'
import exercise from './images/icon-exercise.svg'
import play from './images/icon-play.svg'
import selfCare from './images/icon-self-care.svg'
import social from './images/icon-social.svg'
import study from './images/icon-study.svg'
import work from './images/icon-work.svg'

export default function Tabs({filter}) {

  const state = filter.toLowerCase()
  
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



  return (
    <>
      {data.map((tab, index) => {
        const tabData = tab.timeframes[state];
            return (
              <div className="tabHeader" key={index} style={{backgroundImage: `url(${bgImage[index]})`, backgroundColor: colors[index]}}>
                <article className="tabInfos">
                  <span className="tabIntro">
                    <p className="tabTitle">{tab.title}</p>
                    <img src={elipse} alt={`${tab.name} options button`} className="tabCta" />
                  </span>
    
                  <article className="tabData">
                    <p className="tabHours">{tabData.current}hrs</p>
                    <p className="hoursTotal">Last {filter === 'Daily' && 'Day'} {filter === 'Weekly' && 'Week'} {filter === 'Monthly' && 'Month'} - {tabData.previous}hrs</p>
                  </article>
                </article>
              </div>
            );
      })}
    </>
  );
}

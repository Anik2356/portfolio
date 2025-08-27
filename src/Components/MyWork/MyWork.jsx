import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 8 works initially, show all if "showAll" is true
  const visibleWorks = showAll ? mywork_data : mywork_data.slice(0, 8);

  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="pattern" className="title-pattern" />
      </div>

      <div className="mywork-container">
        {visibleWorks.map((work) => (
          <div key={work.w_no} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <p>{work.w_name}</p>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ←" : "Show More →"}
        </button>
      </div>
    </div>
  )
}

export default MyWork

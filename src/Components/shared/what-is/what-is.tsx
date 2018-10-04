import * as React from 'react'

class WhyUs extends React.Component {

  render() {
    return (
      <div className="what-is">
        <div className="what-container">
          <div className="what-info">
            <div className="what-title">
              <h2>What are we?</h2>
            </div>
            <div className="what-description">
              <p> We are a company aiming to make things easier </p>
              <p> for those who are searching for team members </p>
              <p> to complete their dream projects.</p>
            </div>
          </div>
          <div className="how-info">
            <div className="how-title">
              <h2>How does it work?</h2>
            </div>
            <div className="how-description">
              <p> By registering and filling your skills and habilities</p>
              <p> you can start creating teams and finding people </p>
              <p> who can increase you team's overall knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyUs

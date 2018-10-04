import * as React from 'react'
import Image from '../image/image'

class WhyUs extends React.Component {

  render() {
    return (
      <div className="why-us">
        <div className="image-container">
          <Image className="shake-hands-img" src="shake-hands.jpg" />
        </div>
        <div className="reasons-container">
          <div className="why-title">
            <h2>Why us?</h2>
          </div>
          <div className="why-list">
            <ul>
              <li>Networking made easy</li>
              <li>Fast sign up</li>
              <li>Simple to use</li>
              <li>Free</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default WhyUs

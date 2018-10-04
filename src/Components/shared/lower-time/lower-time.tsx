import * as React from 'react'
import Image from '../image/image'

class LowerTime extends React.Component {

  render() {
    return (
      <div className="lower-time">
        <div className="image-container">
          <Image className="pc-img" src="pc.png" />
        </div>
        <div className="lower-container">
          <div className="lower-title">
            <h2>How to reduce development time?</h2>
          </div>
          <div className="lower-description">
            <p> Working by yourself is great! But it may not always </p>
            <p> bring the perfect results you would expect. </p>
            <p> So why not Team Up, and gather some amazing people</p>
            <p> To share the burden and share experiences?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LowerTime

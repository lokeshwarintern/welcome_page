import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    text: 'Subscribe',
  }

  subscribeStatus = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(() => ({text: 'Subscribed'}))
    } else {
      this.setState(() => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading-ele">Welcome</h1>
        <p className="para-ele">Thank You! Happy Learning</p>
        <button
          className="btn-ele"
          type="button"
          onClick={this.subscribeStatus}
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome

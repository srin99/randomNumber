// Write your code here

import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateNumbers = () => {
    const {randomNumber} = this.state
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
    console.log(randomNumber)
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumbers}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

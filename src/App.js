import React from "react"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick()
      , 1000);
    console.log('render');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('unMounted');
  }



  tick() {
    this.setState(() => ({ date: new Date() }))
  }


  render() {
    return (
      <h2>
        {this.state.date.toLocaleTimeString()}
      </h2>
    )
  }
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.setState(() => ({ visible: false }))
  }


  render() {
    return (
      <div className="App">
        <h1>React lifeCycle
        </h1>
        {this.state.visible &&
          <Clock />
        }

        <button onClick={this.handleClick}>
          click
        </button>
      </div>
    );
  }
}

export default App;

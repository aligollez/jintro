import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      message: ''
    }
  }
  componentDidMount() {
    console.log('componentDidMount!');

    this.inter = setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(this.inter);
        this.setState({
          message: 'Click here to skip this ad'
        }); 
      } else {
        this.setState((prevState) => ({count: prevState.count - 1})); 
      }
    }, 1000);
  }  
  componentWillUnmount() {
    clearInterval(this.inter);
  }  
  render() {
    return (
      <div>
        <p>{this.state.message ? this.state.message : this.state.count}</p>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
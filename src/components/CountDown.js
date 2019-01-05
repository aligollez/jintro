import React from 'react';

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
      message: '',
      destinationUrl: props.jintro ? props.jintro.destinationUrl : ''
    }
  }
  componentDidMount() {
    console.log('componentDidMount!');

    this.inter = setInterval(() => {
      if (this.state.count <= 1) {
        clearInterval(this.inter);
        this.setState({
          message: <a href={this.state.destinationUrl} className="destination-url">Click here to skip this ad</a>
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
      <div>{this.state.message ? this.state.message : 'Skip this ad in '+this.state.count}</div>
    )
  }
}


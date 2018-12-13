import React from 'react';
import { Link } from 'react-router-dom';

export default class JintroForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      destinationUrl: props.jlink ? props.jlink.destinationUrl : '',
      offerPageUrl: props.jlink ? props.jlink.offerPageUrl : '',
      customUrl: props.jlink ? props.jlink.customUrl : '',
      error: ''
    };
  };
  onDestinationUrlChange = (e) => {
    const destinationUrl = e.target.value;
    this.setState(() => ({ destinationUrl }));
  };
  onOfferPageUrlChange = (e) => {
    const offerPageUrl = e.target.value;
    this.setState(() => ({ offerPageUrl }));
  };
  onCustomUrlChange = (e) => {
    const customUrl = e.target.value;
    this.setState(() => ({ customUrl }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.destinationUrl || !this.state.offerPageUrl || !this.state.customUrl) {
      this.setState(() => ({ error: 'Please provide the destination, offer page and custom URLs.'}));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('jIntro link created!');
    };
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.customUrl && <Link to={`/${this.state.customUrl}`}> Click here </Link>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Destination URL"
            value={this.state.destinationUrl}
            onChange={this.onDestinationUrlChange}
          />
          <input 
            type="text" 
            placeholder="Offer Page URL"
            value={this.state.offerPageUrl}
            onChange={this.onOfferPageUrlChange}
          />
          <input 
            type="text" 
            placeholder="Custom URL"
            value={this.state.customUrl}
            onChange={this.onCustomUrlChange}
          />
          <button>Generate jIntro</button>
        </form>
      </div>
    );
  };
};
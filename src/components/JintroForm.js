import React from 'react';
import validator from 'validator';
import shortid from 'shortid';
import { homePath } from '../config/config';
import database from '../firebase/firebase';

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
const shortId = () => shortid.generate();

// let isShortUrlAvailable = '';
// const queryShortUrl = (shortUrl) => database.ref('jintros')
// .orderByChild('shortUrl')
// .equalTo(shortUrl)
// .on('child_added', (jintro) => {
//     // jintro.key && console.log("Not available!");
//     return isShortUrlAvailable = jintro.key;
// });

//------------------------------------------

// database.ref().child("jintros").orderByChild("shortUrl").equalTo("live").once("value",snapshot => {
//   if (snapshot.exists()){

//     const userKey = snapshot.forEach((childSnapshot) => {
//       const key = childSnapshot.key;
//       return key
//     });

//     console.log(userKey);

//     const userData =  snapshot.val();
//     console.log(userData[userKey].destinationUrl);
//   } else {
//     console.log('User does not exist!');
//   }
// })

//---------------------------------------------


export default class JintroForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      destinationUrl: props.jintro ? props.jintro.destinationUrl : '',
      offerPageUrl: props.jintro ? props.jintro.offerPageUrl : '',
      shortUrl: props.jintro ? props.jintro.shortUrl : '',
      error: '',
      message: ''
    };
  };

  checkShortUrl = (shortUrl) => {
    database.ref().child("jintros").orderByChild("shortUrl").equalTo(shortUrl).once("value", snapshot => {
      if (snapshot.exists()){
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          // console.log(`User ${key} exists!`);
    
          const userData =  snapshot.val();
          const shortUrl = userData[key].shortUrl;
          this.setState({error: `"${shortUrl}" is already taken!`});
          // console.log(`"${shortUrl}" is already taken!`);           
        })
      } else {
        // console.log(`"${shortUrl}" is available!`);
          this.setState({error:""});
          this.setState(() => ({ shortUrl }));  
      }
    })   
  }

  onDestinationUrlChange = (e) => {
    const destinationUrl = e.target.value;
    this.setState(() => ({ destinationUrl })); 
  };
  onOfferPageUrlChange = (e) => {
    const offerPageUrl = e.target.value;
    this.setState(() => ({ offerPageUrl }));
  };
  onShortUrlChange = (e) => {
    const shortUrl = e.target.value.replace(/\s/g, '');
    // e.target.value = shortUrl;
    this.checkShortUrl(shortUrl);      
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.destinationUrl) {
      this.setState(() => ({ error: 'Please provide the Destination URL.'}));
    } else if (!this.state.offerPageUrl) {
      this.setState(() => ({ error: 'Please provide the Offer Page URL.'}));
    } else if(!validator.isURL(this.state.destinationUrl, {require_protocol: true})) {
      this.setState(() => ({ error: 'Please provide valid Destination URL'}));
    } else if(!validator.isURL(this.state.offerPageUrl, {require_protocol: true})) {
      this.setState(() => ({ error: 'Please provide valid Offer Page URL'}));
    } else if (this.state.destinationUrl === this.state.offerPageUrl) {
      this.setState(() => ({ error: 'Destination URL and Offer Page URL can\'t be the same' }));
    } else {
      this.setState(() => ({ 
        error: '',
        message: 'Your jIntro is now ready!' 
      }));
      this.props.onSubmit({
        destinationUrl: this.state.destinationUrl,
        offerPageUrl: this.state.offerPageUrl,
        shortUrl: this.state.shortUrl ? this.state.shortUrl : shortId()
      });
      e.target.elements.destinationUrl.value = '';
      e.target.elements.offerPageUrl.value = '';
      !homePath ? e.target.elements.shortUrl.value = '' : null;
    };
  };
  render() {
    return (
      <div>
        { 
          // this.checkShortUrl('Live')
        }
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Destination URL"
            value={this.state.destinationUrl}
            onChange={this.onDestinationUrlChange}
            name="destinationUrl"
            autoFocus
          />
          <input 
            type="text" 
            placeholder="Offer Page URL"
            value={this.state.offerPageUrl}
            onChange={this.onOfferPageUrlChange}
            name="offerPageUrl"
          />
          { 
            !homePath &&
            <input 
              type="text" 
              placeholder="Custom URL (Optional)"
              // value={this.state.shortUrl}
              onChange={this.onShortUrlChange}
              name="shortUrl"
            /> 
          }
          <button>Generate jIntro</button>
        </form>
      </div>
    );
  };
};
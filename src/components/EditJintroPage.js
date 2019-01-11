import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { editJintro, startRemoveJintro } from '../actions/jintros'

export class EditJintroPage extends React.Component {  

  onSubmit = (jintro) => {
    this.props.editJintro(this.props.jintro.shortUrl, jintro)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.startRemoveJintro({ id: this.props.jintro.id });
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <JintroForm jintro={this.props.jintro} onSubmit={this.onSubmit} />  
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  jintro: state.jintros.find((jintro) => jintro.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editJintro: (shortUrl, jintro) => dispatch(editJintro(shortUrl, jintro)),
  startRemoveJintro: (data) => dispatch(startRemoveJintro(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJintroPage);
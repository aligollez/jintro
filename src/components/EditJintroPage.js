import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { editJintro, removeJintro } from '../actions/jintros'

export class EditJintroPage extends React.Component {  

  onSubmit = (jintro) => {
    this.props.editJintro(this.props.jintro.shortUrl, jintro)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Editing the expense with id of {this.props.match.params.id}</p>
        <JintroForm jintro={this.props.jintro} onSubmit={this.onSubmit} />  
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  jintro: state.jintros.find((jintro) => jintro.shortUrl === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editJintro: (shortUrl, jintro) => dispatch(editJintro(shortUrl, jintro))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJintroPage);
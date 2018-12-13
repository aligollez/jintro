import React from 'react';
import { connect } from 'react-redux';
import JintroForm from './JintroForm';
import { editJlink } from '../actions/jintros';
import { removeJlink } from '../actions/jintros';

const JintroViewer = (props) => {
  return (
    <div>
    <div style={{background:'gray', textAlign:'center'}}>This is an Ad. <a href={props.jlink.destinationUrl} target="_blank">Click here to skip >></a></div>
    <div>
      <iframe width="100%" frameBorder="0" height="100%" src={props.jlink.offerPageUrl}></iframe>
    </div>   
  </div> 
  )
 };
 
 const mapStateToProps = (state, props) => {
   return {
     expense: state.jintros.find((jlink) => jlink.customUrl === props.match.params.id)
   };
 };
 
 
 export default connect(mapStateToProps)(JintroViewer);
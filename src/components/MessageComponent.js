import React, { Component } from 'react';
import './MessageComponent.css';


export class MessageComponent extends Component {
  render() {
    return(
    <div>
        <img src={require('./avatar.jpg')} alt='neki tekst' id='pic'/>
        <p>This is an Employee Management System</p>
    </div>
    )
  }
}
export default MessageComponent;
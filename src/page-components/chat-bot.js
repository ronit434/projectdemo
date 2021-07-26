import React, {Component} from 'react';
import "./chatbot.css"


class ChatBot extends Component{
  constructor(props) {
    super(props);
     // Set initial state 
     this.state = {message : '', reply:""} 
    
// Binding this keyword 
this.handleChange = this.handleChange.bind(this) 
this.UserToBot = this.UserToBot.bind(this) 
    
  }
 
    
  handleChange(event) {
    //console.log(event.target.value)

    this.setState({
      message: event.target.value
    });
  }
  UserToBot() {
    //console.log(this.state.message);
    var div = document.createElement('div');
    div.setAttribute("class", "usermessage");
    div.innerHTML =this.state.message;
    document.getElementById('message-area').append(div);
    this.setState({
      message:""
    });

    var reply = document.createElement('div');
    reply.setAttribute("class", "botmessage");
    reply.innerHTML =this.QA(this.state.message);
    document.getElementById('message-area').append(reply);
    document.getElementById('message-area').scrollTo(0,document.getElementById('message-area').scrollHeight);
  }

  QA(question){
    switch (question) {
      case 'Hi':
      case 'hi':
      case 'Hello':
      case 'hello':
      case 'Hey':
      case 'hey':
        return "Hello there, i am an AI bot programmed to help student. How can i assist you.";
        break;
    
      default:
        return "Sorry I couldn't understand.";
        break;
    }

  }
 
  
  render() {
   
    return (
      
     
        <div className="chat-box">
       
         <div className="message-area" id="message-area">

           <div className="usermessage">Hi</div>
           <div className="botmessage">Hello</div>

         </div>
         
         <input className="chat-input" value={this.state.message} onChange={this.handleChange}/>
         <button className="chat-button" onClick={this.UserToBot}>Send</button>
  
          
        </div>
     
      
    );
  }
}

export default ChatBot;

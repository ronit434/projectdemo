import React, {Component} from 'react';
import "./chatbot.css"
import "../components/search"
import Example from '../components/search';


class ChatBot extends Component{
  constructor(props) {
    super(props);
     // Set initial state 
     this.state = {message : undefined, reply:""} 
    
// Binding this keyword 
this.handleChange = this.handleChange.bind(this) 
this.UserToBot = this.UserToBot.bind(this) 
    
  }
 
    
  handleChange(event, { newValue }) {
    //console.log(event.target.value)

    this.setState({
      message: newValue
      
    });
    console.log(event.target)
    console.log('1',newValue);
  }
  
  handleChange2(val) {
    console.log('2', val)
    // if(val){
    //   this.setState({
    //     message:""
    //   });
    // }
    
  
  }
  UserToBot() {
    //console.log(this.state.message);
    var div = document.createElement('div');
    var b = document.createElement('b');
    div.setAttribute("class", "usermessage");
    b.innerHTML =this.state.message;
    var img = document.createElement('img');
    img.src = 'images/user.png';
    div.append(img);
    div.append(b);

    document.getElementById('message-area').append(div);

    this.setState({
      message:""
    });

    var reply = document.createElement('div');
    reply.setAttribute("class", "botmessage");
    reply.innerHTML =this.QA(this.state.message);
    var img = document.createElement('img');
    img.src = 'images/bot.png';
    reply.append(img);
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
      case 'Hola':
      case 'hola':
      case 'i need help':
      case 'I need help':
      case 'some one':
      case 'Some one':
        return "Hello there, i am an AI bot programmed to help student. How can i assist you.";
        break;
      case 'Where can I find a map of the University for guiding myself from current location to my destination?':
        return "Maps of the University of Newcastle's Newcastle (Callaghan), Newcastle City precinct, Central Coast (Ourimbah) and Port Macquarie campuses can be found at Campus Maps. You can also use the Directions Tile on myUON as an additional source for campus maps.";
        break;
      case 'How do I enrol in a course and register for class activities?':
        return "Enrolment is a two-part process: Step one - Enrol in your courses in myHub and plan your timetable. Step two - Choose times for your class activities in Manage myTimetable in myUON.";
        break;
        case 'How can I check majors and elective courses?':
          return "Your Program Handbook will list the available majors for your degree and each course associated with those majors. Please remember to check the course handbooks for the desired major to find out its delivery locations and further specific information to the course.";
          break;
          case 'How can I consult with my program advisor? how to contact them?':
            return "You can arrange a face-to-face or online consultation with your program advisor by emailing them on ProgramAdvisor@uon.edu.au.";
            break;
            case 'I lost my student card? How can I get new card?':
              return "Sorry to hear that. But you don’t need to worry. You can get new student card from student services centre by showing them e-card from your my uon app. ";
              break;
              case 'Where is the library? ':
                return "There are 2 libraries in university, which one you are looking for? Hunter library and auchmuty library. Here is the location map navigate to nearest library.";
                break;
                case 'Is there any university doctor available for consulting my health?':
                  return "University doctors are in student services centre near commonwealth bank. You can either book an appointment or can check for walk-in appointments. Please bring your student card at the time of consultation. ";
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

           {/* <div className="usermessage">Hi</div>
           <div className="botmessage">Hello</div> */}

         </div>
         
         {/* <input className="chat-input" value={this.state.message} onChange={this.handleChange}/> */}
         <Example className="chat-input" msg={this.state.message} func={this.handleChange} func2={this.handleChange2}></Example>
         <button className="chat-button" onClick={this.UserToBot}>Send</button>
        
  
          
        </div>
     
      
    );
  }
}

export default ChatBot;

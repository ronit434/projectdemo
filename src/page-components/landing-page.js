import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UniversityServices from './university-services';
import WeekOneSurvivalPack from './week-one-survival-pack';
import StaffDirectory from './staff-directory';
import UniversityExpectations from './university-expectations';
import FAQsAndTestimonials from './faqs-and-testimonials';
import ChatBot from './chat-bot';
import '../style.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.handleLogoutSubmit(event);
  }

  render() {
    const name = this.props.name;
    const editor = this.props.editor;
    return (
      <Router>
        <div>
          <div className = "header">
          <header className = "header">
            <h1>UoNBegin</h1>
            <p>Welcome {editor ? 'Editor ' + name  : 'Student '}</p>
          </header>
          <nav>
            <Link to = "/" className = "nav-link">University Services</Link>
            <Link to = "/directory" className = "nav-link">Staff Directory</Link>
            <Link to = "/week-one-survival-pack" className = "nav-link">Week 1 Survival Pack</Link>
            <Link to = "/university-expectations" className = "nav-link">What to expect at University</Link>
            <Link to = "/faqs-and-testimonials" className = "nav-link">FAQs and Testionials</Link>
            <Link to = "/chat-bot" className = "nav-link">ChatBot</Link>
          </nav>
          </div>
          <Switch>
            <Route exact path = "/">
              <UniversityServices />
            </Route>
            <Route path = "/directory">
              <StaffDirectory />
            </Route>
            <Route path = "/week-one-survival-pack">
              <WeekOneSurvivalPack />
            </Route>
            <Route path = "/university-expectations">
              <UniversityExpectations />
            </Route>
            <Route path = "/faqs-and-testimonials">
              <FAQsAndTestimonials />
            </Route>
            <Route path = "/chat-bot">
              <ChatBot 
            
              />
            </Route>
          </Switch>
          <footer id = "footer">
            <p>Jacob Neilands: C3303694 | Aaron McCool: c3279449 | Ronit Ronit: c3319077 | Aun Ali: 3216616</p>
            <form onSubmit = {this.handleSubmit}>
              <input type = "submit" value = "Logout" />
            </form>
          </footer>
        </div>
      </Router>
    );
  }
}

export default LandingPage;

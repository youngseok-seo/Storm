import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CreatePage from './pages/CreatePage/CreatePage';
import StoryPage from './pages/StoryPage/StoryPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/create" component={CreatePage}/>
          <Route path="/story" component={StoryPage}/>
        </div>
      </Router>
    );
  }
}

export default App;

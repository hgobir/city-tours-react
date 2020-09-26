import React, {Component} from 'react';
import './App.scss';
import NavBar from './components/Navbar/Navbar'
// dont need to navigate to TourList.js because source file named as index.js
import TourList from './components/TourList'

class App extends Component {
  render() {
      return (
      <React.Fragment>
        <NavBar/>
        <TourList/>
      </React.Fragment>);
  }
}

export default App;

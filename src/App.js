
import './assets/css/App.css';
import { Component } from 'react';
//import components
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

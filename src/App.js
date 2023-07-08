
import logo from './logo.svg';
import './assets/css/App.css';
import brandonLogo from './assets/images/brandonkhoza.png';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
//import components
import Menu from './components/MenuComponent'

import { DISHES } from './shared/dishes';


// function App() {
//   return (
//     <div className="App">
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div className='App'>
        <Navbar dark color='dark'>
          <div className='container'>
            <NavbarBrand>
              <img src={brandonLogo}  alt='' className='navbar--brand'></img>
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;

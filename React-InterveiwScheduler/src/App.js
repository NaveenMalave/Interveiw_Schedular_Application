import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './AppHeader.js';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
 render(){
  return(
    <div className='container'>
      <AppHeader title="Interview Scheduler"/>
      <AppContent/>
      <AppFooter/>
    </div>
  );

 }
}

export default App;

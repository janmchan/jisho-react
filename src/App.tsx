import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component<any> {
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Message />
        
      </header>
    </div>
    );
  }
}
/*
function AppFunc() {
  //primitive type
  let firstValue: boolean = true;
  //arrays
  let valueArray: number[] = [2,3,56];
  //let valueArray: Array<string> = ['apple','orange','eggs'];

  //tuple
  let aTuple: [string, number] = ['cody', 7];
  //enum
  enum Codes {first = 1, second = 2};
  //any
  let firstName: any = 'Manny'
  // void
  const warning = () : void => {
    console.log('Warning');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Message message='This is a simple message'/>
        
      </header>
    </div>
  );
}
*/
export default App;

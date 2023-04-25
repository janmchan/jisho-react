import React, {Component} from 'react';
import './App.css';
import List from './List';
import SampleData from './SampleData';

class App extends Component<any> {
  
  render() {
    return (
      <div className="App">
        <h1>learn react</h1>
        <List data={SampleData.data}/>
      </div>
    );
  }
}

export default App;
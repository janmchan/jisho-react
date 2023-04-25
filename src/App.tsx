import React, {Component} from 'react';
import './App.css';
import List from './List';
import SearchBox from './SearchBox';
import SampleData from './SampleData';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component<any> {
  //List data={SampleData.data}
  render() {
    return (
      <div className="App">
        <h1>learn react</h1>
        <SearchBox/>
      </div>
    );
  }
}

export default App;
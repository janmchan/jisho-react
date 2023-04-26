import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <SearchBox/>
      </div>
    );
  }
}

export default App;
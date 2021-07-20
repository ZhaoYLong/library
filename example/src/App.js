import React, {Component} from 'react';
import "./App.css";
import SayHelloWorld from 'library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React Web APP</h1>
        <h2>
          <SayHelloWorld name={"赵云龙"} />
        </h2>
      </div>
    )
  }
}

export default App;
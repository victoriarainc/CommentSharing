import React, {Component} from 'react';
import '../styles/App.css';
import BaseLayout from './Baselayout.js';
import ParentComponent from './Parentcomponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;

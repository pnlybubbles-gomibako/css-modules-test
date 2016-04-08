import React from 'react';
import CSSModulesComponent from './components/css-modules/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    return (
      <div>
        <CSSModulesComponent />
      </div>
    );
  }
}

export default App;

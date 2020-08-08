import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/items/")
      .then(res => res.json())
      .then(json => this.setState(json))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Eight UI
        </header>
        <ul>
          {this.state.items.map((item) =>
            <li key={item.id}>
              {item.name}
              {item.description}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/items/")
      .then(res => res.json())
      .then(json => this.setState({items: json}))
  }

  render() {
    return (
      <div className="App">
        <h1>Eight UI</h1>
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

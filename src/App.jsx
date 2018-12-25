import React, { Component } from 'react';
import './App.css';
import FooterComponent from './container/footer/footer';
import ListItems from './components/list-items/ListItems';
class App extends Component {
  state = {
    items: [
      {id:1,name:'Item 1'},
      {id:2,name:'Item 2'},
      {id:3,name:'Item 3'},
      {id:4,name:'Item 4'},
      {id:5,name:'Item 5'}
    ]
  
  }
  handleDelete = (index) =>  {
    let filteredItems = this.state.items.filter((data) => data.id !== index);
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Welcome to React Learning</h1>
        </header>
        <div>
        <ListItems items={this.state.items} onDelete={this.handleDelete} />
        </div>
        <FooterComponent>
          <p>
            This is footer content. {new Date().toString("YYYYMMMdd")}
          </p>
        </FooterComponent>
      </div>
    );
  }
}

export default App;

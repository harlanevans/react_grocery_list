import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import Footer from './Footer';
import './App.css';

class App extends Component {

  state = { groceries: [], filter: 'All' }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { name, id: this.getUniqId(), complete: false }
    this.setState({ groceries: [grocery, ...groceries] });
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map(grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  visibleItems = () => {
    const { groceries, filter } = this.state;
    switch (filter) {
      case 'Active':
        return groceries.filter(t => !t.complete)
      case 'Complete':
        return groceries.filter(t => t.complete)
      default:
        return groceries;
    }
  }

  render() {
    const { groceries, filter } = this.state;

    return (
      <div className="css">
        
        <form className='add-item'>
          <GroceryForm addItem={this.addItem} />
        </form>

        <div>
          <List name="Grocery List" 
          items={this.visibleItems()} 
          groceryClick={this.handleClick} />
        </div>

        <div>
          <Footer filter={filter} setFilter={this.setFilter} />
        </div>

      </div>
    );
  }
}

export default App;

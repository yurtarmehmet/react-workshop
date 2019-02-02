import React, { Component } from 'react';
import Header from "./header";
import ProductList from "./productList";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.changeSearchTerm = this.changeSearchTerm.bind(this);
  }

  changeSearchTerm(e){
      let newValue= e.target.value;
      this.setState({
          searchTerm: newValue
      });
  }

  render() {
    return (
      <div className="App">
        <Header onSearchChange={this.changeSearchTerm} />
        <ProductList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;

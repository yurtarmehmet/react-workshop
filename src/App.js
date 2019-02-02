import React, { Component } from 'react';
import Header from "./header";
import ProductList from "./productList";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default App;

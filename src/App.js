import React, { Component } from 'react';
import Header from "./header";
import ProductList from "./productList";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: "",
      filterNew: false
    };

    this.changeSearchTerm = this.changeSearchTerm.bind(this);
    this.filterByNew = this.filterByNew.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
  }

  changeSearchTerm(e){
      let newValue= e.target.value;
      this.setState({
          searchTerm: newValue
      });
  }

  filterByNew(){
    this.setState({
        filterNew: true
    })
  }

  removeFilters(){
    this.setState({
        filterNew: false,
        searchTerm: ""
    });
  }

  render() {
    return (
      <div className="App">
        <Header onSearchChange={this.changeSearchTerm} filterByNew={this.filterByNew} removeFilters={this.removeFilters}/>
        <ProductList searchTerm={this.state.searchTerm} filterNew={this.state.filterNew} />
      </div>
    );
  }
}

export default App;

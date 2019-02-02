import React, { Component } from 'react';
import Header from "./header";
import ProductList from "./productList";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: "",
      filterNew: false,
      isFiltered: false
    };

    this.changeSearchTerm = this.changeSearchTerm.bind(this);
    this.filterByNew = this.filterByNew.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
  }

  changeSearchTerm(e){
      let newValue= e.target.value;
      this.setState({
          searchTerm: newValue,
          isFiltered: !newValue.length ? this.state.filterNew : true
      });
  }

  filterByNew(){
    this.setState({
        filterNew: true,
        isFiltered: true
    })
  }

  removeFilters(){
    this.setState({
        filterNew: false,
        searchTerm: "",
        isFiltered: false
    });
  }

  render() {
    return (
      <div className="App">
        <Header onSearchChange={this.changeSearchTerm} filterByNew={this.filterByNew} filterNew={this.state.filterNew} isFiltered={this.state.isFiltered} removeFilters={this.removeFilters}/>
        <ProductList searchTerm={this.state.searchTerm} filterNew={this.state.filterNew} />
      </div>
    );
  }
}

export default App;

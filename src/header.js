import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);

        this.removeFilters = this.removeFilters.bind(this);
    }

    removeFilters(){
        this.refs.searchInput.value = "";
        this.props.removeFilters()
    }

    render() {
        return (
            <div style={{padding: "30px"}}>
                <input type="text" onChange={this.props.onSearchChange} ref="searchInput" />
                <button onClick={this.removeFilters}>All</button>
                <button onClick={this.props.filterByNew}>Filter New</button>
                <button>Filter Discounted</button>
            </div>
        );
    }
}

export default Header;

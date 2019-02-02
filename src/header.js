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
        console.log(this.props.filterNew);
        return (
            <div style={{padding: "30px"}}>
                <input type="text" onChange={this.props.onSearchChange} ref="searchInput" />
                <button onClick={this.removeFilters} style={{
                    "backgroundColor": !this.props.isFiltered ? "green" : "#fff",
                    "color": !this.props.isFiltered ? "#fff" : "#000"
                }}>All</button>
                <button onClick={this.props.filterByNew} style={{
                    "backgroundColor": this.props.filterNew ? "green" : "#fff",
                    "color": this.props.filterNew ? "#fff" : "#000"
                }}>Filter New</button>
            </div>
        );
    }
}

export default Header;

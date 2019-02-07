import React, { Component } from 'react';
import {connect} from "react-redux";
import {onClickNewFilter} from "./actions/filterAction";

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
                <button onClick={this.props.onClickNewFilter} style={{
                    "backgroundColor": this.props.filterNew ? "green" : "#fff",
                    "color": this.props.filterNew ? "#fff" : "#000"
                }}>Filter New</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterNew: state.filter.filterByNew
    }
};

const mapDispatchToProps = {
    onClickNewFilter : onClickNewFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

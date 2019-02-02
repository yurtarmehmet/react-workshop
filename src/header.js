import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{padding: "30px"}}>
                <input type="text" onChange={this.props.onSearchChange}/>
            </div>
        );
    }
}

export default Header;

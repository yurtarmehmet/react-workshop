import React, { Component } from 'react';
import Product from "./product";

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state = {
            _products: [],
            products: []
        };

        this.getProducts = this.getProducts.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        return fetch("https://5bc5c6c1f85dce00138e4c73.mockapi.io/app/products")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    _products: response
                }, () => {
                    this.filterProducts(this.props.searchTerm);
                });
            })
    }

    filterProducts(searchTerm){
        let searchedProducts = this.state._products.filter((product) => {
            return product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        this.setState({
            products: searchedProducts
        });
    }

    componentWillReceiveProps(newProps){
        if(this.props.searchTerm !== newProps.searchTerm){
            this.filterProducts(newProps.searchTerm)
        }
    }

    render() {
        return (
            <div className="product_grid">
                <ul className="product_list list">
                    {this.state.products.map((product) => {
                        return <Product key={product.productId} {...product} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ProductList;

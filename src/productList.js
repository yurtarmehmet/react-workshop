import React, { Component } from 'react';
import Product from "./product";

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        return fetch("https://5bc5c6c1f85dce00138e4c73.mockapi.io/app/products")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    products: response
                })
            })
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

import {Component} from "react";
import React from "react";

const checkDiscount = (price, oldPrice) => {
    if(!price){
        return null;
    }
    if(!oldPrice){
        return null;
    }
    if(price >= oldPrice){
        return null;
    }
    let discountRate = (oldPrice - price) / oldPrice * 100;
    return <div className="product_sale product_discount">
        <p>%{discountRate.toFixed(2)}</p>
    </div>;
};

class Product extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let {image, name, oldPrice, price, brand, imageS} = this.props;
        return (
            <li className="product_item">
                {
                    this.props.params.isNew && <div className="product_sale">
                        <p>New</p>
                    </div>
                }
                {
                    checkDiscount(price, oldPrice)
                }
                <div className="product_image">
                    <a href="#"><img src={imageS} alt={name} /></a>
                </div>
                <div className="product_values">
                    <div className="product_title">
                        <h5>{name}</h5>
                    </div>
                    <div className="product_price">
                        <a href="#">
                            {
                                oldPrice && <span className="price_old">${oldPrice}</span>
                            }
                            <span className="price_new">${price}</span>
                        </a>
                    </div>
                    <div className="product_desc">
                        <p className="truncate">
                            {brand}
                        </p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;
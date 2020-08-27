import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img,seller,price,stock} = props.product;
    console.log(props)
    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3  className="product-name">{props.product.name}</h3>
                <p><small>By {seller}</small></p>
                <p>${price}</p>
               <p><small>Only {stock} left in stock. Order soon</small></p>
               <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;
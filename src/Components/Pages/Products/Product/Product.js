import axios from 'axios';
import React from 'react';

const Product = ({ product }) => {
    const { title, description, price, img } = product;
    const handleAddtoCart = (data) => {
        axios.post('https://dotbike-server.herokuapp.com/carts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added to Cart Successfully');
                }

            })
    }
    return (
        <div className="col-lg-4 mb-5">
            <div className="card">
                <img className="card-img-top p-3" src={img} alt={title} />
                <div className="card-body">
                    <h4>{title}</h4>
                    <p className="mt-3">Price : <strong>${parseFloat(price)}</strong></p>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <button onClick={() => handleAddtoCart(product)} className="btn btn-sm btn-bg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
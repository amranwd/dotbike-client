import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dotbike-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container py-5">
            <div className="row mb-3">
                <div className="col-lg-6 text-center offset-lg-3">
                    <h1>Our Products</h1>
                    <p>Explore our awesome Products for you</p>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
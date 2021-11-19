import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CartProduct from '../CartProdcut/CartProduct';

const CartProducts = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('https://dotbike-server.herokuapp.com/carts')
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Prodcut Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartProducts.map(cartProduct => <CartProduct
                        key={cartProduct._id}
                        cartProduct={cartProduct}
                    ></CartProduct>)
                }
            </tbody>
        </Table>
    );
};

export default CartProducts;
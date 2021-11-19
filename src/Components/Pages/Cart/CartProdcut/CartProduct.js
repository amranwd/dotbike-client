import React, { useState } from 'react';


const CartProduct = ({ cartProduct }) => {
    const { _id, title, price } = cartProduct;
    const [cart, setCart] = useState([]);

    const handleDeleteCats = id => {
        const process = window.confirm('Are you want to delete this item ?');
        if (process) {
            const url = `https://dotbike-server.herokuapp.com/carts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Item deleted successfully');
                        const remainingCarts = cart.filter(cart => cart._id !== id);
                        setCart(remainingCarts);
                    }

                })
        }
    }
    return (
        <tr>
            <td>{title}</td>
            <td>${price}</td>
            <td style={{ textAlign: 'center' }}>
                <button onClick={() => handleDeleteCats(_id)} className="btn btn-sm btn-danger">Remove</button>
                {/* {console.log(cart._id)} */}
            </td>
        </tr>
    );
};

export default CartProduct;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardProduct = ({ dashboardProduct }) => {

    const { _id, title, price } = dashboardProduct;
    const [products, setProducts] = useState([]);

    const handleDeletedashboard = id => {
        const process = window.confirm('Are you want to delete this Product?');
        if (process) {
            const url = `https://dotbike-server.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Item deleted successfully');
                        const remainingCarts = products.filter(product => product._id !== id);
                        setProducts(remainingCarts);
                    }

                })
        }
    }
    return (
        <tr>
            <td>{title}</td>
            <td>${price}</td>
            <td style={{ textAlign: 'center' }}>
                <Link to={`/products/update/${_id}`}>
                    <button className="btn btn-sm btn-warning">Edit</button>
                </Link>
            </td>
            <td style={{ textAlign: 'center' }}>
                <button onClick={() => handleDeletedashboard(_id)} className="btn btn-sm btn-danger">Remove</button>
                {/* {console.log(cart._id)} */}
            </td>
        </tr>
    );
};

export default DashboardProduct;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashboardProduct from '../DashboardProduct/DashboardProduct';

const DashboardProducts = () => {
    const [dashboardProducts, setDashboardProducts] = useState([]);
    useEffect(() => {
        fetch('https://dotbike-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDashboardProducts(data))
    }, [])
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Prodcut Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    dashboardProducts.map(dashboardProduct => <DashboardProduct
                        key={dashboardProduct._id}
                        dashboardProduct={dashboardProduct}
                    ></DashboardProduct>)
                }
            </tbody>
        </Table>
    );
};

export default DashboardProducts;
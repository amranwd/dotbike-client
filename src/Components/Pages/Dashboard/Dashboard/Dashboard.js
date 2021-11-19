import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import DashboardProducts from '../DashboardProducts/DashboardProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import Profile from '../Profile/Profile';
import './Dashboard.css';

const Dashboard = () => {
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="dashboard-menu">
                        <Link to="/allproducts">All Products</Link>
                        <Link to="/cart">View Cart</Link>
                        <Link to={`${url}/profile`}>User Profile</Link>
                        {admin && <div>
                            <Link to={`${url}/manage`}>Manage All Products</Link>
                            <Link to={`${url}/admin`}>Make Admin</Link>
                            <Link to={`${url}/payment`}>Payments</Link>
                            <Link to="/addProducts">Add Products</Link>
                        </div>}
                        <button className="log-btn" onClick={logout}>Log Out</button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="dashboard-content">
                        <Switch>
                            <Route exact path={path}>
                                <Profile></Profile>
                            </Route>
                            <Route path={`${path}/profile`}>
                                <Profile></Profile>
                            </Route>
                            <Route exact path={`${path}/manage`}>
                                <DashboardProducts></DashboardProducts>
                            </Route>
                            <Route exact path={`${path}/admin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import Login from './Components/Pages/Login/Login/Login';
import Registration from './Components/Pages/Login/Registration/Registration';
import Navigation from './Components/Pages/Shared/Navigation/Navigation';
import AuthProvider from './Components/Pages/Shared/Context/AuthProvider/AuthProvider';
import Footer from './Components/Pages/Shared/Footer/Footer';
import AddProducts from './Components/Pages/Products/AddProducts/AddProducts';
import PrivateRoute from './Components/Pages/Shared/Context/PrivateRoute/PrivateRoute';
import AllProducts from './Components/Pages/Products/AllProducts/AllProducts';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Cart from './Components/Pages/Cart/Cart/Cart';
import EditProducts from './Components/Pages/Dashboard/EditProducts/EditProducts';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <PrivateRoute path="/products/update/:id">
            <EditProducts></EditProducts>
          </PrivateRoute>
          <Route path="/allproducts">
            <AllProducts></AllProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <PrivateRoute path="/addProducts">
            <AddProducts></AddProducts>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

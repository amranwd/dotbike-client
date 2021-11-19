import CartProducts from '../CartProducts/CartProducts';


const Cart = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="text-center mb-5">Cart Products</h1>
                    <CartProducts></CartProducts>
                </div>
            </div>
        </div>
    );
};

export default Cart;
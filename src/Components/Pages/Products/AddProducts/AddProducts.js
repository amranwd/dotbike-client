import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import addProduct from '../../../../images/add_product.jpg';


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://dotbike-server.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold">Add Product</h1>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control form-control-lg mb-3" placeholder="Title"  {...register("title")} />
                        <textarea className="form-control form-control-lg mb-3" placeholder="Description"  {...register("description")} ></textarea>
                        <input type="number" className="form-control form-control-lg mb-3" placeholder="Price"  {...register("price")} />
                        <input className="form-control form-control-lg mb-3" placeholder="Image URL"  {...register("img")} />
                        <input className="btn btn-lg btn-bg" type="submit" value="Add Product" />
                    </form>
                </div>
                <div className="col-lg-5">
                    <img src={addProduct} alt="add product" />
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
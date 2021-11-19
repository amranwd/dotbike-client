import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import formImg from '../../../../images/form.jpg';

const EditProducts = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const product_url = `https://dotbike-server.herokuapp.com/products/${id}`;
        fetch(product_url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handletitle = (e) => {
        const titleVal = e.target.value;
        const updateTitleVal = { title: titleVal, description: product.description, price: product.price, img: product.img }
        setProduct(updateTitleVal);
    }
    const handleDescription = (e) => {
        const descriptionVal = e.target.value;
        const updateDescriptionVal = { title: product.title, description: descriptionVal, price: product.price, img: product.img }
        setProduct(updateDescriptionVal);
    }
    const handlePrice = (e) => {
        const priceVal = e.target.value;
        const updatePriceVal = { title: product.title, description: product.description, price: priceVal, img: product.img }
        setProduct(updatePriceVal);
    }
    const handleImg = (e) => {
        const imgVal = e.target.value;
        const updateImgVal = { title: product.title, description: product.description, price: product.price, img: imgVal }
        setProduct(updateImgVal);
    }

    const handleUpdate = e => {
        const product_url = `https://dotbike-server.herokuapp.com/products/${id}`;
        fetch(product_url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Update Successfully');
                    setProduct({});
                }
            })


        e.preventDefault();
    }
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <form onSubmit={handleUpdate}>
                        <input type="text" className="form-control mb-3 form-control-lg" onChange={handletitle} value={product.title || ''} />
                        <textarea className="form-control mb-3 form-control-lg" onChange={handleDescription} value={product.description || ''} ></textarea>
                        <input type="text" className="form-control mb-3 form-control-lg" onChange={handlePrice} value={product.price || ''} />
                        <input type="text" className="form-control mb-3 form-control-lg" onChange={handleImg} value={product.img || ''} />
                        <input className="btn btn-lg btn-bg" type="submit" value="Update Product" />
                    </form>
                </div>
                <div className="col-lg-6">
                    <img src={formImg} alt="form" />
                </div>
            </div>
        </div>
    );
};

export default EditProducts;
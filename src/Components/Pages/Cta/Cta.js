import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Cta.css';

const Cta = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://dotbike-server.herokuapp.com/leads', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for Subscribe');
                    reset();
                }
            })
    };
    return (
        <section id="section-cta">
            <div className="sep-background-mask"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className=" col-lg-5 col-sm-4 quick_newsletter">
                        <div className="newsletter-info">
                            <h1>Subscribe to Newsletters</h1>
                            <p className="text-white">And stay informed about our news and events</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="newsletter-element">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <input type="email" className="form-control form-control-lg" placeholder="Enter Email" {...register("email")} />
                                    </div>
                                    <div className="col-lg-4">
                                        <input className="btn btn-lg btn-bg" type="submit" value="Subscribe" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Cta;
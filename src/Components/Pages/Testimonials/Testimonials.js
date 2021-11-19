import React from 'react';

const Testimonials = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center mb-5">
                    <h1>Testimonials</h1>
                    <p>Look what people says about us. our bike are world class quality ful standard. they maintain their everything.</p>
                </div>
            </div>
            <div className="ex1 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-4">

                <div className="col">
                    <div className="card h-100 card-review">
                        <div className="card-header pb-0 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2"
                                    src="https://via.placeholder.com/256/fe669e/fff.png" alt="user" />
                                <div className="d-flex flex-column justify-content-center align-items-start fs-5 lh-sm">
                                    <b className="text-primary">Studio KonKon</b>
                                    <small className="text-muted">12th Nov 2021</small>
                                </div>
                            </div>
                            <span className="fs-1 my-0 fw-bolder text-success">10</span>
                        </div>
                        <div className="card-body py-2">
                            <p className="card-text">With High class style our latest bikes are awesome, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="card-footer pt-0 d-flex flex-row align-items-center text-muted">
                            <span className="me-1"><i className="zmdi zmdi-comments"></i></span>
                            <small>5 Comments</small>
                        </div>

                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 card-review">
                        <div className="card-header pb-0 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2"
                                    src="https://via.placeholder.com/256/9f9cfc/fff.png" alt="user" />
                                <div className="d-flex flex-column justify-content-center align-items-start fs-5 lh-sm">
                                    <b className="text-primary">Labore Dolore</b>
                                    <small className="text-muted">13 Nov 2021</small>
                                </div>
                            </div>
                            <span className="fs-1 my-0 fw-bolder text-danger">2</span>
                        </div>
                        <div className="card-body py-2">
                            <p className="card-text">Did you checked our latest version of royal enfield quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="card-footer pt-0 d-flex flex-row align-items-center text-muted">
                            <span className="me-1"><i className="zmdi zmdi-comments"></i></span>
                            <small>No Comments</small>
                        </div>

                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 card-review">
                        <div className="card-header pb-0 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-2"
                                    src="https://via.placeholder.com/256/99ccff/fff.png" alt="user" />
                                <div className="d-flex flex-column justify-content-center align-items-start fs-5 lh-sm">
                                    <b className="text-primary">Tempor Elit</b>
                                    <small className="text-muted">14th Nov 2021</small>
                                </div>
                            </div>
                            <span className="fs-1 my-0 fw-bolder text-warning">6</span>
                        </div>
                        <div className="card-body py-2">
                            <p className="card-text">Dot bike bullet version is a royal emperial in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="card-footer pt-0 d-flex flex-row align-items-center text-muted">
                            <span className="me-1"><i className="zmdi zmdi-comments"></i></span>
                            <small>1 Comment</small>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
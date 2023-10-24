import React from "react";

export const Heros = () => {
    return (
        <div>
            {/* Desktop Heros */}
            <div className="d-none d-lg-block">
                <div className="container mt-5">
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-6">
                            <div className="col-image-left"></div>
                        </div>
                        <div className="col-4 col-md-4 container d-flex justify-content-end align-items-start">
                            <div className="ml-2">
                                <h1>What have you been reading?</h1>
                                <p className="lead">
                                    The library team would love to know what you have been reading.
                                    Whether it is to learn a new skill or grow within one,
                                    we will be able to provide the top content for you.
                                </p>
                                <a className="btn main-color btn-lg text-white" href="#">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-4 col-md-4 container d-flex justify-content-start align-items-end">
                            <div className="ml-2">
                                <h1>Our collection is always changing!</h1>
                                <p className="lead">
                                    Try to check in daily as our collection is always changing!
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="col-image-right"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up</a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

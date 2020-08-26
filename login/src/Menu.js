import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Main() {


    return (
        <div className="full gray">
            <section className="container-lg ">
                <div className="row d-flex flex-nowrap justify-content-between lightgray margin">
                    <ul className=" col-3 d-flex justify-content-between margin ">
                        <Link className="nones col-4 action lightgray" to="/Buy">
                            <li className="">
                                Buy
                            </li>
                        </Link>

                        <Link className="nones col-4 action lightgray" to="/Sell">
                            <li className="">
                                Sell
                            </li>
                        </Link>
                        <Link className="nones col-4 action lightgray" to="/About">
                            <li className="">
                                About
                            </li>
                        </Link>
                    </ul>

                    <ul className="col-3  d-flex margin ">

                        <Link className="nones action black" to="Register">
                            <li className="  ">
                                Register
                            </li>
                        </Link>
                        <Link className="nones action black darker" to="Login">
                            <li className="  ">
                                Login
                            </li>
                        </Link>

                    </ul>


                </div>

            </section>

        </div>

    );
}
export default Main;

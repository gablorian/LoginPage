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
                        <Link className="linkStyleDelete col-4  lightgray" to="/Buy">
                            <li className="">
                                Buy
                            </li>
                        </Link>

                        <Link className="linkStyleDelete col-4  lightgray" to="/Sell">
                            <li className="">
                                Sell
                            </li>
                        </Link>
                        <Link className="linkStyleDelete col-4  lightgray" to="/About">
                            <li className="">
                                About
                            </li>
                        </Link>
                    </ul>

                    <ul className="col-3  d-flex margin ">

                        <Link className="linkStyleDelete action black" to="Register">
                            <li className="  ">
                                Register
                            </li>
                        </Link>
                        <Link className="linkStyleDelete action black darker" to="Login">
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

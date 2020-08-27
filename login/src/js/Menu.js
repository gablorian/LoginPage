import React from 'react';
import '../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="full menuContainer">
            <section className="container-lg ">
                <div className="row d-flex flex-nowrap justify-content-between menuContainer__smallMenu deleteMargin">
                    <ul className=" col-3 d-flex justify-content-between deleteMargin ">
                        <Link className="linkStyleDelete col-4  menuContainer__smallMenu__listPunctor" to="/Buy">
                            <li>
                                Buy
                            </li>
                        </Link>
                        <Link className="linkStyleDelete col-4  menuContainer__smallMenu__listPunctor" to="/Sell">
                            <li>
                                Sell
                            </li>
                        </Link>
                        <Link className="linkStyleDelete col-4  menuContainer__smallMenu__listPunctor" to="/About">
                            <li>
                                About
                            </li>
                        </Link>
                    </ul>
                    <ul className="col-3 d-flex deleteMargin ">
                        <Link className="linkStyleDelete registerAndLoginMenu--brighter" to="Register">
                            <li>
                                Register
                            </li>
                        </Link>
                        <Link className="linkStyleDelete registerAndLoginMenu--darker" to="Login">
                            <li>
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

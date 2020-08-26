import React from 'react';
import './App.scss';
import './_login';
import {Link} from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()\\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};
class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
            email: null,
            password: null,
            errors: {
                login: '',
                email: '',
                password: '',
            }
        }
    }
//czy valid check
    handleSubmit = (event) => {
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
        }else{
            event.preventDefault();
            console.error('Invalid Form')
        }
    };
//walidacja
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'login':
                errors.login =
                    value.length < 100 && value.length !== 0
                        ? ''
                        : 'Login musi mieć przynajmniej 1 znak i być krótszy niż 100 znaków!';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email jest niepoprawny!';
                break;
            case 'password':
                errors.password =
                    value.length > 8 && value.length < 25
                        ? ''
                        : 'Hasło musi mieć między 8, a 25 znaków!';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value}, () => {
            console.log(errors)
        })


    };
    render() {
        return (
            <section className="container-lg">
                <div className="row d-flex">
                    <div>
                        <h1>Login</h1>
                        <h2>To access your account</h2>
                        <div className="row loginBox d-flex">

                            <div className="col-7 loginBox__smaller justify-content-center">
                                <form onSubmit={this.handleSubmit} className="col-11">
                                    <div className="row d-flex flex-column">
                                        <div className="d-flex flex-column spacer">
                                            <label>Login:</label>
                                            <input type="text" name="login" onChange={this.handleChange} required/>
                                        </div>
                                        <div className="d-flex flex-column spacer">
                                            <label>Email Address:</label>
                                            <input type="email" name="email" onChange={this.handleChange} required/>
                                        </div>
                                        <div className="d-flex flex-column spacer">
                                            <label>Password:</label>
                                            <input type='password' name='password' onChange={this.handleChange} required />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between row">
                                        <Link className="col-5 linkStyleDelete" to="/Login/Forgot" > Forgot password?</Link>
                                        <button className=" col-5 buttonStyling" type="submit"> Login</button>
                                    </div>

                                </form>
                            </div>
                            <div className="col-4 correction">
                                <div id="registerAddon" className="d-flex flex-column justify-content-center align-content-center margin">

                                    <h4>Not a member?</h4>

                                        <Link className=" linkStyleDelete" to="/Register">
                                            <button className=" col-12 buttonStyling">Register today</button>
                                        </Link>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Test;

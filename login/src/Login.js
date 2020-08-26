import React from 'react';
import './App.scss';
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

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
        }else{
            console.error('Invalid Form')
        }
    };

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
                        <span>Login</span>
                        <span>To access your account</span>
                        <div className="row">
                            <div className="col-12">
                                <div className="col-8">
                                    <form onSubmit={this.handleSubmit} className="col-11">
                                        <label>
                                            Login:
                                            <input type="text" name="login" onChange={this.handleChange} required/>
                                        </label>
                                        <label>
                                            Email Address:
                                            <input type="email" name="email" onChange={this.handleChange} required/>
                                        </label>
                                        <label>
                                            Password:
                                            <input type='password' name='password' onChange={this.handleChange} required />
                                        </label>
                                        <a> Forgot password?</a>
                                        <button type="submit"> Login</button>
                                    </form>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <span>Not a member?</span>
                                        <button>
                                            <Link to="/Register">qqqqq</Link>
                                        </button>
                                    </div>
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

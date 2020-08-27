import React from 'react';
import '../scss/App.scss';
import {Link} from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()\\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // jaśli error w state to not valid
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
//czy valid check albo prevent
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
                        : 'Username musi mieć przynajmniej 1 znak i być krótszy niż 100 znaków!';
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
                                <form onSubmit={this.handleSubmit} className="col-12">
                                    <div className="row d-flex flex-column justify-content-center">
                                        <div className="d-flex flex-column spacer">
                                            <label>Username:</label>
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
                                <div id="registerAddon" className="row d-flex flex-column align-content-center  margin">
                                    <div>
                                        <h4 id="changeToReg">Not a member?</h4>
                                    </div>
                                    <div>
                                        <Link className=" linkStyleDelete" to="/Register">
                                            <button className=" col-12 buttonStyling">Register today</button>
                                        </Link>
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

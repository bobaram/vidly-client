import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Form from './common/form';
import { register } from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
    state = {
        data: { name: "", email: "", password: ""},
        errors: {}
    }
    schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(5).required().label('Password')
    }
    doSubmit = async () => {
        try {
            const response = await register(this.state.data);
            auth.loginWithJwt(response.headers['x-auth-token']);
            this.props.history.replace('/');
            toast.info('Successfully Registered!');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    }
    render() { 
        if (auth.getCurrentUser()) return <Redirect to='/' />

        return (
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", 'password')}
                {this.renderButton('Register')}
            </form>
        </div>
        );
    }
}
 
export default RegisterForm;
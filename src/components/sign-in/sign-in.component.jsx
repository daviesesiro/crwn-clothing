import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        label='Email'
                        required 
                        handleChange={this.handleChange}
                    />
                    
                    <FormInput 
                        type="password" 
                        value={this.state.password} 
                        name="password"
                        label='password'
                        required 
                        handleChange={this.handleChange}
                    />
                   

                    <CustomButton type="submit">sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log({ email, password });
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Login to GROCERY</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email'
                        />
                    </div>
                    <div className="form-group">
                        
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                    </div>
                    <button type="submit"style={{backgroundColor:'green'}}>Login</button>

                    <p>
                    Don't have an account? <Link to="/CreateAccount">Create Account</Link> 
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

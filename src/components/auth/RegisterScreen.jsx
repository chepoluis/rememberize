import React from 'react';

export const RegisterScreen = () => {
    return (
        <div className='auth-form-container'>
            <form className='auth-form'>
                <div className="auth-form-content">
                    <h3 className='auth-form-title mb-4'>Sign up</h3>
                    
                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder='User name'
                        />
                    </div>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder='Email'
                        />
                    </div>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder='Age'
                        />
                    </div>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder='Password'
                        />
                    </div>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder='Confirm Password'
                        />
                    </div>

                    <div className='d-grid gap-2 mt-3 mb-4'>
                        <button type='submit' className='submit btn btn-primary'>
                            Login
                        </button>
                    </div>

                    <p className='forgot-password text-right mt-4'>
                        Already have an account? <a href="/">Sign in here</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

import React from 'react';

export const LoginScreen = () => {
    return (
        <div className='auth-form-container'>
            <form className='auth-form'>
                <div className='auth-form-content'>
                    <h3 className='auth-form-title mb-4'>Sign In</h3>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder='Enter email'
                        />
                    </div>

                    <div className='form-group mt-3 mb-4'>
                        <input
                            type='password'
                            className='form-control mt-1'
                            placeholder='Enter password'
                        />
                    </div>

                    <div className='d-grid gap-2 mt-3 mb-4'>
                        <button type='submit' className='submit btn btn-primary'>
                            Login
                        </button>
                    </div>

                    <hr className='mb-4' />

                    <div className='d-grid gap-2 mt-3'>
                        <div 
                            className="facebook-btn"
                        >
                            <div className="facebook-icon-wrapper">
                                <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png" alt="facebook button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with Facebook</b>
                            </p>
                        </div> 
                    </div>

                    <div className='d-grid gap-2 mt-3'>
                        <div 
                            className="google-btn"
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with Google</b>
                            </p>
                        </div> 
                    </div>

                    <p className='forgot-password text-right mt-5'>
                        You have not yet registered? <a href="/">Sign up here</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

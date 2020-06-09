import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const Auth = () => {
    const message = useMessage();
    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form });
            console.log(data);
        } catch (e) { }
    }
    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>Short link</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter email"
                                    id="email"
                                    type="email"
                                    className="validate"
                                    name="email"
                                    onChange={changeHandler} />
                                <label htmlfor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Enter password"
                                    id="password"
                                    type="password"
                                    className="validate"
                                    name="password"
                                    onChange={changeHandler} />
                                <label htmlfor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            disabled={loading}>Login</button>
                        <button
                            className="btn green lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

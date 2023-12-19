import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                </div>
            </form>
        </div>
    );

};

export default Login;

/*export function Login() { 
    return (
        <Section>
            <h1>Login</h1>

            <form >
                <input type="text"/>
                <input type="password"/>
             
            </form>
        </Section>

    )

}*/
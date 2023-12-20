import { FaUser } from "react-icons/fa"; //Importaciones para utilizar iconos
import { FaLock } from "react-icons/fa"; // npm install react-icons --save

import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required />
                    <FaLock className="icon" />
                </div>
                <div className='renember-forgot'>
                    <label><input type='checkbox'/>Recordar</label>
                    <a href='#'> ¿Olvido Su contraseña? </a>
                </div>

                <button type="submit"> Login </button>
                <button type="submit"> Sign Up </button>
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
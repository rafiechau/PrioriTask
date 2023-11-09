import React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <div className={styles.title}>Login</div>
                <form action="" className={styles.formLogin}>
                    <label htmlFor="">Email :</label>
                    <input type="email" />
                    <label htmlFor="">Password :</label>
                    <input type="password" />
                </form>
                <button>Login</button>
                <p>Dont have an account? Click <a href="" onClick={() => navigate('/register')}>Here</a></p>
            </div>
        </div>
    )
}

export default Login

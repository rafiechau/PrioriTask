import React from 'react'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectLogin } from '@containers/Client/selectors'

const Register = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContent}>
        <div className={styles.title}>Register</div>
        <form action="" className={styles.formRegister}>
          <label htmlFor="">Fullname :</label>
          <input type="text" />
          <label htmlFor="">Email :</label>
          <input type="email" />
          <label htmlFor="">Password :</label>
          <input type="password" />
        </form>
        <button>Register</button>
        <p>Click<a href="" onClick={() => navigate('/login')}> Here</a> to Login</p>
      </div>
    </div>
  )
}



export default Register
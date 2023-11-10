import React, { useEffect } from 'react'
import styles from './style.module.scss'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectLogin } from '@containers/Client/selectors'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types';

const Register = ({login}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (login) {
      navigate('/')
    }
  }, [])

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

Register.propTypes = {
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Register);


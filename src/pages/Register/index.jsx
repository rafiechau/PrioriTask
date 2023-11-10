import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { selectLogin } from '@containers/Client/selectors'
import { registerRequest } from '@containers/Client/actions'

import styles from './style.module.scss'

const Register = ({ login }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {

    if (!fullname || !email || !password) {
      setError('All data must be filled in!!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long!!');
      return;
    }
    const dataUser = {
      fullname,
      email,
      password,
    };

    dispatch(registerRequest(dataUser));
    navigate('/login')
    // console.log(dataUser, "userdataaaa");
  };


  useEffect(() => {
    if (login) {
      navigate('/')
    }
  }, [login])

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContent}>
        <div className={styles.title}>Register</div>
        <div className={styles.error}>{error}</div>
        <form action="" className={styles.formRegister}>
          <label htmlFor="">Fullname :</label>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          <label htmlFor="">Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Password :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button onClick={handleRegister}>Register</button>
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


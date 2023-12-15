import React, { useState } from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/Store';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const RegisterClick = () => {
    navigate('/reg');
  };

  const LoginClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const responseBody = await response.text();
  
      if (response.ok) {
        dispatch({
          type: actions.login,
          payload: { email, password }, 
        });
        navigate('/Main');
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setLoginError(true);
    }
  };

  if (user) {
    navigate('/Main');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="login-container">
        <Typography component="h1" variant="h5" className="login-title">
          Wanna meet?
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Пошта"
          name="email"
          autoComplete="email"
          value={email}
          onChange={EmailChange}
          className="login-input"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={PasswordChange}
          className="login-input"
        />
        <div className="btn">
          <Button variant="contained" color="primary" onClick={RegisterClick} className="login-button">
            Реєстрація
          </Button>
          <Button variant="contained" color="success" onClick={LoginClick} className="login-button">
            Увійти
          </Button>
        </div>
        {loginError && (
          <Typography color="error" variant="body2" className="login-error">
            Помилка входу. Перейдіть на сторінку реєстрації.
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Login;

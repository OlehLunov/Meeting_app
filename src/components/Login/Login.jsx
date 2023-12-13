import React, { useState } from 'react';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/Store';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const RememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const RegisterClick = () => {
    navigate('/reg');
  };

  const LoginClick = () => {
   
    dispatch({
      type: actions.login,
      payload: { email, password },
    });
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={RememberMeChange} />}
          label="Запам'ятати"
          className="login-checkbox"
        />
        <div className="btn">
          <Button variant="contained" color="primary" onClick={RegisterClick} className="login-button">
            Реєстрація
          </Button>
          <Button variant="contained" color="success" onClick={LoginClick} className="login-button">
            Увійти
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;

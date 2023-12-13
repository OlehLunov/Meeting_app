import React, { useState } from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actions } from '../../Store/Store';
import { Link } from 'react-router-dom';
import './Reg.css';

const Reg = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const RegisterClick = () => {
    
    dispatch({
      type: actions.register,
      payload: { email, password },
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="register-container">
        <Typography component="h1" variant="h5" className="register-title">
          Реєстрація
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
          className="register-input"
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
          className="register-input"
        />
        <Button variant="contained" color="primary" onClick={RegisterClick} className="register-btn">
          Зареєструватися
        </Button>
        <Link to="/login" className="login-link">
          Уже маєте акаунт?
        </Link>
      </div>
    </Container>
  );
};

export default Reg;

import React, { useState } from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actions } from '../../Store/Store';
import { useNavigate } from 'react-router-dom';
import './Reg.css';

const Reg = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [registrationError, setRegistrationError] = useState(false);
  const navigate = useNavigate();

  const EmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(emailValue));
  };

  const PasswordChange = (e) => {
    const passwordValue  = e.target.value;
    setPassword(passwordValue);
    setPassError(passwordValue.length < 6);
  };

  const RegisterClick = async () => {
    console.log('Register button clicked');
    
    if (!email || !password) {
      console.log('Email or password is empty');
      setEmailError(!email);
      setPasswordError(!password);
      return;
    }
  
    if (!email || !email.includes('@') || emailError) {
      console.log('Invalid email format');
      setEmailError(true);
      return;
    }
  
    if (!password || password.length < 6 || passError) {
      console.log('Invalid password format');
      setPassError(true);
      return;
    }
  
    try {
      console.log('Sending request to server...');
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        console.log('Registration successful');
        setRegistrationError(false);
        navigate('/login');
      } else {
        console.log('Registration failed');
        setRegistrationError(true);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setRegistrationError(true);
    }
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
        {registrationError && (
          <Typography color="error" variant="body2" className="register-error">
            Помилка реєстрації. Спробуйте ще раз.
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Reg;

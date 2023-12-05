import React, { useState } from 'react';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography } from '@mui/material';

const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleRegisterClick = () => {
    console.log('Регистрация');
  };

  const handleLoginClick = () => {
    console.log('Войти');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Название программы
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Почта"
          name="email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={handleRememberMeChange} />}
          label="Запомнить"
        />
        <div>
          <Button variant="contained" color="primary" onClick={handleRegisterClick}>
            Регистрация
          </Button>
          <Button variant="contained" color="success" onClick={handleLoginClick}>
            Войти
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;

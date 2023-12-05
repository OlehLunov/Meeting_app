import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {
  const handleInviteClick = () => {
    // Логика для кнопки "Пригласить человека"
  };

  const handleLogoutClick = () => {
    // Логика для кнопки "Выйти из аккаунта"
  };

  const handleScheduleMeetingClick = () => {
    // Логика для кнопки "Запланировать митинг"
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Название приложения
          </Typography>
          <Button color="inherit" onClick={handleInviteClick}>
            Пригласить человека
          </Button>
          <Button color="inherit" onClick={handleLogoutClick}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" style={{ textAlign: 'center', marginTop: '30px' }}>
          Добро пожаловать!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleScheduleMeetingClick}
          style={{ display: 'block', margin: '50px auto' }}
        >
          Запланировать митинг
        </Button>
      </Container>
    </Container>
  );
};

export default Main;

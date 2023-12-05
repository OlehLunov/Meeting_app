import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Main = () => {
    const navigate = useNavigate(); 

  const InviteClick = () => {

  };

  const LogoutClick = () => {
    navigate('/Login');
  };

  const MeetingClick = () => {
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Wanna meet?
          </Typography>
          <Button color="inherit" onClick={InviteClick}>
            Запросити учасника
          </Button>
          <Button color="inherit" onClick={LogoutClick}>
            Вийти 
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={MeetingClick}
          style={{ display: 'block', margin: '50px auto' }}
        >
          Запланувати зустріч
        </Button>
      </Container>
    </Container>
  );
};

export default Main;

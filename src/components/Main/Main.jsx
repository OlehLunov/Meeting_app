import React, { useState } from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import CreateMeet from '../CreateMeet/CreateMeet';

const Main = () => {
    const navigate = useNavigate(); 
    const [showCreateMeet, setShowCreateMeet] = useState(false);

    const InviteClick = () => {
    
    };

    const LogoutClick = () => {
      navigate('/Login');
    };

    const MeetingClick = () => {
      setShowCreateMeet(true);
    };

    const MeetingSubmit = (meetInfo) => {
      console.log("Done", meetInfo);
      setShowCreateMeet(false);
    }

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
          {showCreateMeet && <CreateMeet onSubmit={MeetingSubmit} />}
        </Container>
      </Container>
    );
};

export default Main;
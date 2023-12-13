import React, { useState } from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/Store';
import CreateMeet from '../CreateMeet/CreateMeet';
import MeetingCard from '../MeetingCard/MeetingCard'; 

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings);

  const Edit = (meeting) => {
    setEditingMeeting(meeting);
    setShowCreateMeet(true);
  };

  const [showCreateMeet, setShowCreateMeet] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState(null);

  const InviteClick = () => {};
  const LogoutClick = () => {
    dispatch({ type: actions.logout });
    navigate('/Login');
  };

  const MeetingClick = () => {
    setShowCreateMeet(true);
  };

  const MeetingSubmit = (meetInfo) => {
    console.log("Done", meetInfo);
    if (editingMeeting) {
      const updatedMeetings = meetings.map((meeting) =>
        meeting === editingMeeting ? meetInfo : meeting
      );
      dispatch({ type: actions.updateMeeting, payload: updatedMeetings });
      setEditingMeeting(null);
    } else {
      dispatch({ type: actions.addMeeting, payload: meetInfo });
    }
    setShowCreateMeet(false);
  };

  const Delete = (meeting) => {
    const updatedMeetings = meetings.filter((m) => m.id !== meeting.id);
    dispatch({ type: actions.updateMeeting, payload: updatedMeetings });
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
        {showCreateMeet && <CreateMeet onSubmit={MeetingSubmit} editingMeeting={editingMeeting} />}
        <Grid container spacing={2}>
          {meetings.map((meeting, index) => (
            <MeetingCard
              key={index}
              meeting={meeting}
              onEdit={Edit}
              onDelete={Delete}
            />
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Main;

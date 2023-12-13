import React, { useState } from 'react';
import { AppBar, Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreateMeet from '../CreateMeet/CreateMeet';

const MeetingCard = ({ meeting, onEdit, onDelete }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px', cursor: 'pointer' }}>
      <h2>Данные о совещании:</h2>
      <p>Дата и время: {meeting.date.toString()}</p>
      <p>Организатор: {meeting.admin}</p>
      <Button variant="outlined" color="primary" onClick={() => onEdit(meeting)}>
        Изменить
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => onDelete(meeting)}>
        Удалить
      </Button>
    </Paper>
  </Grid>
);

const Main = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [showCreateMeet, setShowCreateMeet] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState(null);

  const InviteClick = () => {};
  const LogoutClick = () => {
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
      setMeetings(updatedMeetings);
      setEditingMeeting(null);
    } else {

      setMeetings([...meetings, meetInfo]);
    }
    setShowCreateMeet(false);
  };

  const handleEdit = (meeting) => {
    setEditingMeeting(meeting);
    setShowCreateMeet(true);
  };

  const handleDelete = (meeting) => {
    const updatedMeetings = meetings.filter((m) => m !== meeting);
    setMeetings(updatedMeetings);
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Main;

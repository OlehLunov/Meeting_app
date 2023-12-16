import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns as Adapter } from '@mui/x-date-pickers/AdapterDateFns';
import { actions } from '../../Store/Store';
import "./CreateMeet.css"

const CreateMeet = ({ onSubmit, editingMeeting }) => {
  const meetings = useSelector((state) => state.meetings);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orgName, setOrgName] = useState('');
  const [storedMeetings, setStoredMeetings] = useState([]);

  useEffect(() => {
    const storedMeetings = JSON.parse(localStorage.getItem('storedMeetings')) || [];
    setStoredMeetings(storedMeetings);
  }, []);

  const DateChange = (date) => {
    setSelectedDate(date);
  };

  const orgNameChange = (e) => {
    setOrgName(e.target.value);
  };

  const meetSubmit = () => {
    const meetInfo = {
      date: selectedDate,
      admin: orgName,
    };

    const Edit = (meeting) => {
      setEditingMeeting(meeting);
      setShowCreateMeet(true);
    };
    
    const updatedMeetings = [...storedMeetings, meetInfo];
    setStoredMeetings(updatedMeetings);
    localStorage.setItem('storedMeetings', JSON.stringify(updatedMeetings));

    onSubmit(meetInfo);
  };

  return (
    <LocalizationProvider dateAdapter={Adapter}>
      <Container className="container">
        <Typography variant="h4" className="heading">
          {'Запланувати міт'}
        </Typography>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={6}>
            <TextField
              label="Адміністратор"
              fullWidth
              value={orgName}
              onChange={orgNameChange}
              className="textfield"
            />
          </Grid>
          <Grid item xs={6}>
            <DesktopDateTimePicker
              label="Виберіть дату та час"
              value={selectedDate}
              onChange={DateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              className="textfield"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={meetSubmit} className="button">
          {'Підтвердити'}
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default CreateMeet;

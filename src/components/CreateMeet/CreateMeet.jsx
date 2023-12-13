import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns as Adapter } from '@mui/x-date-pickers/AdapterDateFns';
import { useDispatch } from 'react-redux';
import { actions } from '../../Store/Store';
import './CreateMeet.css';

const CreateMeet = ({ onSubmit, editingMeeting }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(editingMeeting ? editingMeeting.date : new Date());
  const [orgName, setOrgName] = useState(editingMeeting ? editingMeeting.admin : '');

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
    if (editingMeeting) {
     
      const updatedMeeting = { ...editingMeeting, ...meetInfo };
      dispatch({ type: actions.updateMeeting, payload: updatedMeeting });
    } else {
    
      dispatch({ type: actions.addMeeting, payload: meetInfo });
    }
    onSubmit(meetInfo);
  };

  return (
    <LocalizationProvider dateAdapter={Adapter}>
      <Container className="container">
        <Typography variant="h4" className="heading">
          {editingMeeting ? 'Редактировать встречу' : 'Запланировать митинг'}
        </Typography>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <TextField
              label="Организатор (инициалы)"
              fullWidth
              value={orgName}
              onChange={orgNameChange}
              className="textfield"
            />
          </Grid>
          <Grid item xs={6}>
            <DesktopDateTimePicker
              label="Выберите дату и время"
              value={selectedDate}
              onChange={DateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              className="textfield"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={meetSubmit}
          className="button"
        >
          {editingMeeting ? 'Сохранить изменения' : 'Подтвердить'}
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default CreateMeet;

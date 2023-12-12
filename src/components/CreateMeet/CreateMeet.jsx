import React from 'react';
import { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns as Adapter } from '@mui/x-date-pickers/AdapterDateFns';

const CreateMeet = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orgName, setOrgName] = useState('');

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
    onSubmit(meetInfo);
  };

  return (
    <LocalizationProvider dateAdapter={Adapter}>
      <Container>
        <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
          Запланировать митинг
        </Typography>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={6}>
            <TextField
              label="Организатор (инициалы)"
              fullWidth
              value={orgName}
              onChange={orgNameChange}
              style={{ marginBottom: '20px' }}
            />
          </Grid>
          <Grid item xs={6}>
            <DesktopDateTimePicker
              label="Выберите дату и время"
              value={selectedDate}
              onChange={DateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
              style={{ marginBottom: '20px' }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={meetSubmit}
          style={{ display: 'block', margin: '20px auto' }}
        >
          Подтвердить
        </Button>
      </Container>
    </LocalizationProvider>
  );
};

export default CreateMeet;

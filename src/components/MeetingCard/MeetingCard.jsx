import React from 'react';
import { Grid, Paper, Button } from '@mui/material';

const MeetingCard = ({ meeting, onEdit, onDelete }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', marginBottom: '20px', cursor: 'pointer' }}>
      <h2>Інформація:</h2>
      <p>Дата та час: {meeting.date?.toString()}</p>
      <p>Адміністратор: {meeting.admin}</p>
      <Button variant="outlined" color="primary" onClick={() => onEdit(meeting)}>
        Змінити
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => onDelete(meeting)}>
        Видалити
      </Button>
    </Paper>
  </Grid>
);

export default MeetingCard;

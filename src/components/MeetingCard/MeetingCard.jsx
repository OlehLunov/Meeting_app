import React from 'react';
import { Grid, Paper, Button } from '@mui/material';

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

export default MeetingCard;

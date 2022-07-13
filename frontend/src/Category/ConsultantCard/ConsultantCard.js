import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Scheduler from '../../Scheduler/Scheduler';
import DialogPopUp from '../../shared/components/DialogPopUp';
import { useDispatch } from 'react-redux';
import { clearAppointmentsList } from '../../store/reducers/scheduleReducer';
import { red } from '@mui/material/colors';
import AlertNotification from '../../shared/components/AlertNotification';
import { Alert } from '@mui/material';
const CategoryCard = ({
  consultantId,
  firstName,
  lastName,
  profilePicture,
  description,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  let scheduler;

  const handleClick = () => {
    if (!user) {
      alert('Please login to book an appointment');
    }
    handleClickOpen();
  };
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(clearAppointmentsList());
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleClick}>
        <CardMedia
          component="img"
          height="120px"
          width="100%"
          image={profilePicture}
          alt="profile picture"
        />
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h6"
            color="text.primary"
            sx={{ width: 250 }}
          >
            {firstName} {lastName}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>

          <Typography variant="body2" color="text.secondary" component="div">
            Rating: {rating ? rating : "No rating"}
          </Typography>

          <Typography variant="body2" color="text.secondary" component="div">
            Price per hour: {price}
          </Typography>
        </CardContent>
      </Card>
      <DialogPopUp onClose={handleClose} open={open}>
        <Scheduler selectable consultantId={consultantId} />
      </DialogPopUp>
    </>
  );
};

export default CategoryCard;

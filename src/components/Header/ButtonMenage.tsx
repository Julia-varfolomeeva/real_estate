import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonMenage() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text"  sx={{
      textDecoration:'underline',
      color:'black',
      whiteSpace: 'nowrap',
      fontSize:'14px',
      paddingTop:'10px',
    
      '&:hover': {
        backgroundColor: 'grey', 
        color:'white'// Изменяем стиль при наведении курсора
      },
    
      }} >Menage rentals</Button>
      <Button variant="text"
      sx={{
        textDecoration:'underline',
        color:'black',
        whiteSpace: 'nowrap',
        fontSize:'14px',
        paddingTop:'10px',
        '&:hover': {
            backgroundColor: 'grey', 
            color:'white'// Изменяем стиль при наведении курсора
          },
        }}>Advertise</Button>

      
    </Stack>
  );
}
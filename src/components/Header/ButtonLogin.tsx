import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonLogin() {
  return (
    <Stack spacing={2} direction="row" >
    <Button  href="/Login" variant="contained"
      sx={{
        backgroundColor: 'white', // Устанавливаем цвет фона
        color: 'black', // Устанавливаем цвет текста
        borderRadius: '15px', // Устанавливаем радиус границы
        borderColor:'grey',
        
        whiteSpace: 'nowrap',
        maxHeight:'40px',

       
        

        '&:hover': {
          backgroundColor: 'black', 
          color:'white'// Изменяем стиль при наведении курсора
        },
      }}
    
    >Log in</Button>
    <Button href="/Registration" variant="contained"
    sx={{
      backgroundColor: 'black', // Устанавливаем цвет фона
      color: 'white', // Устанавливаем цвет текста
      borderRadius: '15px',
     
      whiteSpace: 'nowrap',
      maxHeight:'40px',
      

      '&:hover': {
        backgroundColor: 'grey', 
        color: 'black'
      },
    }}>Sing up</Button>
    </Stack>
  );
}
// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
// import css from './Contact.css'
import { Divider, Typography } from '@mui/material';


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    const {photo, name, phone, email} = data;
    return (
    <>
        <div style={{ display :'flex', alignItems:'center', marginBottom:'10px' }}>
            <img alt='photo contact'
                 src={photo}
                 width={80}
                 height={80}
                 style={{ 
                    borderRadius:'50%', 
                    marginRight:'8%', 
                    marginLeft:'3%', 
                     }}
                 />
            <div style={{ textAlign:'left' }}>
                <Typography variant='body1' component='div'>{name}</Typography>
                <Typography variant='subtitle1' component='div' color='text.secondary'>{phone}</Typography>
                <Typography variant='subtitle1' component='div' color='text.secondary'>{email}</Typography>               
            </div>
            <Divider style={{color:'red'}}/>
        </div>
        <Divider style={{ marignBottom:'20px' }}/>
    </>
    );
};

export default Contact;

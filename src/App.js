import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm'
import { Card, CardContent, Grid, List } from '@mui/material';
import { useState } from 'react';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handlerAddContact =(value) => setContacts([...contacts,value]);

  return (
    <div className="App">
    <Header/>
    <Grid container style={{ padding:'40px 0'}}>
      <Grid item md={6}>
        <ContactForm fnAddContact={(value)=> handlerAddContact(value)}/>
    </Grid>
      <Grid item md={6}>
      <Card sx={{ maxWidth:600, background:"#c6ebc8" }}>
        <CardContent>
          <List>
            {contacts.map((contact, index)=>( <Contact key={index} data={contact}/>))}
          </List>
        </CardContent>
      </Card>
    </Grid>
    </Grid>
  </div>
  );
};

export default App;

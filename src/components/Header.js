// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import css from './Header.css'

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <header> 
      <title> Call a Friend - Your friendly contact app </title>
      <p>Call a Friend</p>
      <h1> Your friendly contact app</h1>
    </header>

    </>
  );
};

export default Header;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavHeader } from './components/common/NavHeder';
import { PosterSlider } from './components/PosterSlider';
import {DetailsSection} from './components/DetailsSection';
import {FooterComp} from './components/FooterComp';
import { Stack } from '@mui/material';
import { ImageHolderComp } from './components/ImageHolderComp';

const linkArray = ["Home","Services","About","Contact Us"]
function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <meta name='viewport'  content='width=device-width' initial-scale='1.0'/>
      <NavHeader links={linkArray}></NavHeader>
      <main style={{ marginTop: 50 }}>
        <Stack className='content' >
          <PosterSlider></PosterSlider>
          <DetailsSection></DetailsSection>
          <ImageHolderComp></ImageHolderComp>
          <FooterComp></FooterComp>
        </Stack>
      </main>
    </div>
  );
}

export default App;

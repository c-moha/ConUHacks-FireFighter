import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppBar from './components/Appbar';
import Logo from './components/Logo';
import Map from './components/Map';

function App() {
  return (
    // <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    //   {/* AppBar at the Top */}
    //   <AppBar />

    //   {/* Logo in the Top-Right Corner */}
    //   <Logo />

    //   {/* Main Content */}
    //   <div
    //     style={{
    //       flex: 1, // Fills the remaining space below the AppBar
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       padding: '20px',
    //     }}
    //   >
    //     <div
    //       style={{
    //         height: '80vh', // Map height is 60% of the viewport height
    //         width: '80vw', // Map width is 80% of the viewport width
    //         boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for aesthetics
    //         borderRadius: '8px', // Optional rounded corners
    //         overflow: 'hidden', // Ensures no overflow
    //       }}
    //     >
    //       <Map />
    //     </div>
    //   </div>
    // </div>
    <div>
      <div style={{ display: 'flex' }}>
      <AppBar />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <Logo />
      <Map />
      </div>
      
      </div>
    </div>
  );
}

export default App;


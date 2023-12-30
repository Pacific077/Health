import React from 'react';
import heart from "../../images/heart.gif"
function NotAvailablePage() {
  return (
    <div
      style={{
        backgroundImage: `url('medical-background.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            color: 'black',
            fontSize: '5rem',
            textShadow: '2px 2px 4px #000000',
            animation: 'heartbeat 2s infinite',
          }}
        >
          Not Available
        </h1>
        <p style={{ color: 'black' }}>
          This page is currently not available. Please try again later.
        </p>
        <img
          src={heart}
          alt="Heartbeat Animation"
          style={{ width: '200px' }}
        />
     
      </div>
    </div>
  );
}

export default NotAvailablePage;

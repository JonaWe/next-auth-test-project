import React from 'react';

export default function AccessDenied() {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'red' }}>Access Denied!</h1>
    </div>
  );
}

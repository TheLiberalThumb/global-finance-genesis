import React from 'react';

const FloatingElements = () => {
  return (
    <>
      <div 
        className="floating-element w-32 h-32 bg-rich-gold/20 hidden lg:block"
        style={{ top: '20%', left: '10%' }}
      />
      <div 
        className="floating-element w-24 h-24 bg-rich-gold/15 hidden lg:block"
        style={{ top: '60%', right: '15%' }}
      />
      <div 
        className="floating-element w-40 h-40 bg-rich-gold/10 hidden xl:block"
        style={{ top: '40%', left: '80%' }}
      />
      <div 
        className="floating-element w-20 h-20 bg-rich-gold/25 hidden lg:block"
        style={{ top: '80%', left: '25%' }}
      />
    </>
  );
};

export default FloatingElements;
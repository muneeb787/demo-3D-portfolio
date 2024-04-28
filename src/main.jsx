import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Canvas } from '@react-three/fiber';
import './css/card.scss';
import './css/globals.scss';

function Root() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <Canvas ref={canvasRef}>
        <App />
      </Canvas>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
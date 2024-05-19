// Canvas.js
import React, { useRef, useEffect } from 'react';

const Canvas = ({ backgroundColor, textColor }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCanvas();
  }, [backgroundColor, textColor]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Insert image
    const image = new Image();
    image.src = 'https://p0.pxfuel.com/preview/607/503/598/summer-flowering-plants-phlox-phlox-flower-perennial-flowers.jpg';
    image.onload = () => {
      const imageWidth = 200;  
      const imageHeight = 150; 
      const x = (canvas.width - imageWidth) / 2;
      const y = (canvas.height - imageHeight) / 2; 
      ctx.drawImage(image, x, y, imageWidth, imageHeight);

   
      const text = "Flower";
      ctx.fillStyle = textColor;
      ctx.font = "30px Arial";
      const textWidth = ctx.measureText(text).width;
      const textX = (canvas.width - textWidth) / 2;
      const textY = 50; 
      ctx.fillText(text, textX, textY);
    };
  };

  return (
    <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid black' }} />
  );
};

export default Canvas;

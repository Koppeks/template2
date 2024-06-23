import React, { useEffect, useRef } from 'react';
import "./ParticlesEffect.css"


export default function ParticleEffect({amountRange}) {
  const canvasRef = useRef(null);
  const mouse = { x: 0, y: 0 }
  const rate = 60;
  const arc = amountRange;
  const size = 7;
  const speed = 5;
  const colors = ['#2664eb'];
  const parts = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    const createParticles = () => {
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
          angle: Math.random() * Math.PI * 2, // Random initial angle
          rotationSpeed: Math.random() * 0.02 - 0.01
        };
      }
    };

    const drawParticles = (time) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        //crosses---------------------------------------
        const crossSize = li.size
        ctx.save();
        ctx.translate(li.x, li.y);
        ctx.rotate(li.angle);

        ctx.beginPath();
        ctx.strokeStyle = li.c;
        ctx.lineWidth = 2;

        // Draw horizontal line of the cross
        ctx.moveTo(-crossSize, 0);
        ctx.lineTo(crossSize, 0);

        // Draw vertical line of the cross
        ctx.moveTo(0, -crossSize);
        ctx.lineTo(0, crossSize);

        ctx.stroke();
        ctx.restore();

        li.angle += li.rotationSpeed; // Update the rotation angle
        
        //circles---------------------------------------
        // ctx.beginPath();

        // ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        // ctx.fillStyle = li.c;
        // ctx.strokeStyle = li.c;
        // if (i % 2 === 0) {
        //   ctx.stroke();
        // } else {
        //   ctx.fill();
        // }

        //---------

        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }
    };

    const distanceBetween = (p1, p2) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const animateParticles = () => {
      let time = 0;
      const animate = () => {
        drawParticles(time);
        if (time < speed) {
          time++;
        }
        setTimeout(animate, 1000 / rate);
      };
      animate();
    };
    
    const handleMouseMove = (e) => {
      mouse.x = e.layerX;
      mouse.y = e.layerY;
    };

    canvas.addEventListener('mousemove', handleMouseMove, false);
    
    createParticles();
    animateParticles();

    // Cleanup function to remove event listener on component unmount
  }, []);

  return <canvas ref={canvasRef} id="test" className="canva_background"></canvas>;
};

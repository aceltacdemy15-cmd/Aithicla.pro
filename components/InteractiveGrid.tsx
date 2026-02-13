import React, { useEffect, useRef } from 'react';

export const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Grid configuration
    const spacing = 60; // Space between grid lines
    const influenceRadius = 250; // How far the mouse affects the grid
    const forceFactor = 0.3; // How much the grid bends

    // Initialize grid points
    let rows = Math.ceil(height / spacing) + 2;
    let cols = Math.ceil(width / spacing) + 2;
    
    // Store original and current positions
    interface Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
    }
    
    let points: Point[][] = [];

    const initGrid = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      rows = Math.ceil(height / spacing) + 2;
      cols = Math.ceil(width / spacing) + 2;
      
      points = [];
      for (let r = 0; r < rows; r++) {
        const row: Point[] = [];
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          row.push({ x, y, originX: x, originY: y });
        }
        points.push(row);
      }
    };

    const updatePoints = () => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const point = points[r][c];
          
          // Calculate distance to mouse
          const dx = mouseRef.current.x - point.originX;
          const dy = mouseRef.current.y - point.originY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply force if within radius
          if (distance < influenceRadius) {
            const force = (influenceRadius - distance) / influenceRadius;
            const angle = Math.atan2(dy, dx);
            
            // Push points AWAY from mouse
            const moveX = Math.cos(angle) * force * influenceRadius * forceFactor;
            const moveY = Math.sin(angle) * force * influenceRadius * forceFactor;
            
            // Ease towards target (simple lerp for smoothness)
            point.x += (point.originX - moveX - point.x) * 0.1;
            point.y += (point.originY - moveY - point.y) * 0.1;
          } else {
            // Return to origin
            point.x += (point.originX - point.x) * 0.1;
            point.y += (point.originY - point.y) * 0.1;
          }
        }
      }
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)'; // Brand Teal with low opacity
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const point = points[r][c];
          if (c === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const point = points[r][c];
          if (r === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      }
    };

    const loop = () => {
      updatePoints();
      drawGrid();
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    initGrid();
    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

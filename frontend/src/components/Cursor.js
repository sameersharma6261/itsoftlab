import { useEffect, useState, useRef } from "react";
// import "./Cursor.css"

export default function Home() {
  const [pieces, setPieces] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    const numberOfPieces = 30;
    const newPieces = [];

    for (let i = 0; i < numberOfPieces; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      newPieces.push({
        id: i,
        x,
        y,
        originalX: x, // Store original position
        originalY: y,
        size: Math.random() * 30 + 20,
        rotation: Math.random() * 360,
        velocityX: 0,
        velocityY: 0,
      });
    }

    setPieces(newPieces);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animate = () => {
    setPieces((prevPieces) =>
      prevPieces.map((piece) => {
        const dx = mousePosition.x - piece.x;
        const dy = mousePosition.y - piece.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200; // Cursor effect range

        let newX = piece.x;
        let newY = piece.y;

        if (distance < maxDistance) {
          // Move towards cursor
          const attraction = (1 - distance / maxDistance) * 0.15;
          newX += dx * attraction;
          newY += dy * attraction;
        } else {
          // Return to original position smoothly
          newX += (piece.originalX - piece.x) * 0.05;
          newY += (piece.originalY - piece.y) * 0.05;
        }

        return {
          ...piece,
          x: newX,
          y: newY,
          rotation: piece.rotation + (Math.random() - 0.5) * 0.5,
        };
      })
    );

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);

  return (
    <>
    <div className="contaiiieener">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="glass-piece"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
      <div className="cursorrre" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </div>
    <style>
      {`/* body {
    margin: 0;
    cursor: none;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    overflow: hidden;
  } */
  
.app-container {
    /* width: 100vw;
    height: 100vh; */
    position: relative;
    /* will-change: transform; */
  }
  
  .cursor {
    width: 60px;
    height: 60px;
    /* background: rgba(255, 255, 255, 0.1); */
    background: rgba(0, 225, 255, 0.415);

    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    left: 0;
    top: 0;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(8px);
    /* border: 1px solid rgba(255, 255, 255, 0.129); */
    /* box-shadow: 
      inset 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 30px rgba(255, 255, 255, 0.1); */
    will-change: transform;
    transform-origin: center;
    transition: transform 0.05s cubic-bezier(0.23, 1, 0.32, 1);
    /* z-index: 9999; */
    z-index: -1;
  }
  
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .content h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0;
    background: linear-gradient(to right, #64ffda, #48c9b0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    line-height: 1.2;
  }
  
  .content p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: rgba(255, 255, 255, 0.7);
    margin-top: 1rem;
    text-align: center;
    max-width: 80ch;
    line-height: 1.6;
  }










  .contaiiieener {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: -30px;
    top: 0;
    z-index: 1;
  }
  
  .glass-piece {
    position: absolute;
    /* background: rgba(255, 255, 255, 0.1); */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    /* backdrop-filter: blur(4px); */
    /* box-shadow: 0px 4px 6px rgba(141, 141, 141, 0.1); */
    transition: transform 0.05s linear;
  }
  
  .cursor {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  form{
    z-index: 20;
  }`}
    </style>
    </>
  );
}

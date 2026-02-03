import React, { useState } from 'react';
import './Valentine.css';

export default function Valentine() {
  const [response, setResponse] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: 0, top: 0 });
  const [confetti, setConfetti] = useState([]);
  const [noIndex, setNoIndex] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);
  const MAX_NO_CLICKS = 5;

const noResponses = [
  {
    text: "Last chance 👀",
    img: `${process.env.PUBLIC_URL}/assets/kermit-frog.gif`,
  },
  {
    text: "Really",
    img: `${process.env.PUBLIC_URL}/assets/side-eye-dog.gif`,
  },
  {
    text: "I think you read the question wrong",
    img: `${process.env.PUBLIC_URL}/assets/minion.gif`,
  },
  {
    text: "Let's do this properly. Will you be my valentine?",
    img: `${process.env.PUBLIC_URL}/assets/waah-waa.gif`,
  },
  {
    text: "Please give me a chance ♫⋆｡♪ ₊˚♬ ﾟ. can I be your valentine?",
    img: `${process.env.PUBLIC_URL}/assets/gumball.gif`,
  },
];




  const createConfetti = () => {
    const colors = ['#ff6b9d', '#ffc2d4', '#ffd700', '#ff1493', '#ff69b4'];
    const confettiElements = [];
    
    for (let i = 0; i < 100; i++) {
      confettiElements.push(
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      );
    }
    
    return confettiElements;
  };


  const handleYes = () => {
    setResponse('yes');
    const confettiElements = createConfetti();
    setConfetti(confettiElements);
    
    setTimeout(() => setConfetti([]), 3000);
  };

const handleNo = () => {
  setResponse('no');

  if (noClickCount >= MAX_NO_CLICKS) return;
  setNoClickCount(prev => prev + 1);


 
   setNoIndex(prev =>
    (prev + 1) % noResponses.length
  );
};

  return (
    <div className="valentine-container">
      <div className="heart-bg">
        <div className="heart">💕</div>
        <div className="heart">❤️</div>
        <div className="heart">💖</div>
        <div className="heart">💗</div>
        <div className="heart">💕</div>
        <div className="heart">❤️</div>
        <div className="heart">💖</div>
        <div className="heart">💗</div>
        <div className="heart">💕</div>
      </div>

      {confetti}

      <div className="container">
      <img src="/assets/love-letter.gif" alt="Cupid" className="cupid-image" 
      style={{
      width: 'clamp(220px, 70vw, 360px)',
      height: 'auto',
      maxHeight: '280px',
      objectFit: 'contain',
    }}/>
        <h1>Will You Be My Valentine?</h1>
        <p className="subtitle">A question from the heart</p>
        {!response && (
          <div className="buttons">
            <button className="yes-btn" onClick={handleYes}>
              <span style={{ position: 'relative', zIndex: 1 }}>Yes! 💕</span>
            </button>
            <button 
              className="no-btn" 
              onClick={handleNo}
              style={{
                position: 'relative',
                left: `${noButtonPosition.left}px`,
                top: `${noButtonPosition.top}px`,
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>No</span>
            </button>
          </div>
        )}
        
        {response === 'yes' && (
          <div className="response yes">
            <h2>YAYYYYY! 🎉</h2>
            <p>I can't wait to see you on the 14th of February! 💕</p>
            <button onClick={() => setResponse(null)}>Back</button>
          </div>
        )}
        
        {response === 'no' && (
        <div className="response no">

           <h2 key={`text-${noIndex}`}>
      {noResponses[noIndex].text}
    </h2>
    <img
      style={{
    width: 'clamp(220px, 70vw, 360px)',
    height: 'auto',
    maxHeight: '280px',
    objectFit: 'contain',
  }}
      src={noResponses[noIndex].img}
      alt="No reaction"
      key={noIndex}
    />
            <div className="buttons">
            <button className="yes-btn" onClick={handleYes}>
              <span style={{ position: 'relative', zIndex: 1 }}>Yes! 💕</span>
            </button>
            <button
  className="no-btn"
  onClick={handleNo}
  disabled={noClickCount >= MAX_NO_CLICKS}
  style={{
    cursor: noClickCount >= MAX_NO_CLICKS ? 'not-allowed' : 'pointer',
    opacity: noClickCount >= MAX_NO_CLICKS ? 0.5 : 1,
  }}
>
  No
</button>
          </div>
              
          </div>
        )}
      </div>
    </div>
  );
}

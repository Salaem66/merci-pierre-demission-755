import { useState, useRef } from 'react';

const App = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const fireworksRef = useRef(null);

  const handleClick = () => {
    setShowFireworks(true);
    fireworksRef.current.style.display = 'block';
    setTimeout(() => {
      setShowFireworks(false);
      fireworksRef.current.style.display = 'none';
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Pierre, merci pour ta démission</h1>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-8 relative"
        onClick={handleClick}
      >
        Cliquez ici
        <div
          className="fireworks absolute bottom-0 left-1/2 transform -translate-x-1/2"
          ref={fireworksRef}
          style={{ display: 'none' }}
        >
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      </button>
    </div>
  );
};

export default App;
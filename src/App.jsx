import { useState } from 'react';

const App = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleClick = () => {
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Pierre, merci pour ta démission</h1>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={handleClick}
      >
        Cliquez ici
      </button>
      {showFireworks && (
        <div className="fixed inset-0 z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
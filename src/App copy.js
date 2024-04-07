import React, { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid h-screen place-content-center space-y-4 bg-slate-500">
      <div
        className="text-yellow-500 text-2xl transition-colors duration-300 ease-in-out hover:text-blue-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Hovered Text" : "Hello"}
      </div>
    </div>
  );
}

export default App;

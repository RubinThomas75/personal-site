"use client";

import { useState, useRef, useEffect } from "react";

export default function MedDemo() {
  const [history, setHistory] = useState<string[]>([]); // Stores command history
  const [input, setInput] = useState<string>(""); // Stores user input
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when page loads or when clicked
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = async (command: string) => {
    if (command.trim().toLowerCase() === "clear") {
      setHistory([]); // Clears screen
      return;
    }
  
    try {
      const res = await fetch("/api/query", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: command }),
      });
  
      const data = await res.json();
  
      // Append command and API response separately
      setHistory((prev) => [...prev, `>> ${command}`, data.response]);
    } catch (error) {
      console.error("Error contacting backend:", error); 
      setHistory((prev) => [...prev, `>> ${command}`, "Error contacting backend."]);
    }
  };
  

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const trimmedCommand = input.trim();
  
      if (trimmedCommand === "") {
        // If the input is empty, just move to a new line in history
        setHistory((prev) => [...prev, ">> "]);
      } else {
        handleCommand(trimmedCommand);
      }
  
      setInput(""); // Clear input field for next command
    }
  };
  
  return (
    <div
      className="w-screen h-screen bg-black text-green-400 flex justify-center items-center p-4"
      onClick={() => inputRef.current?.focus()} // Click anywhere to focus input
    >
      <div className="w-full max-w-5xl h-full flex flex-col">
        {/* Terminal Header */}
        <div className="p-4 bg-gray-900 text-white text-sm font-mono border-b border-gray-700">
          Medical AI Terminal Demo
        </div>

        {/* Terminal Body */}
        <div className="w-full h-full bg-black text-green-400 font-mono text-lg p-4 overflow-y-auto">
          {/* Display Command History */}
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}

          {/* Current Command Line */}
          <div className="flex">
            <span className="mr-2">&gt;&gt; </span>
            <input
              ref={inputRef}
              className="bg-black text-green-400 font-mono text-lg outline-none border-none w-full caret-green-400"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

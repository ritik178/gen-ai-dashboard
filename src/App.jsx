import { useState } from 'react'
import './App.css'
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import QueryResults from "./components/QueryResults";

function App() {
  

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
    <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg shadow-xl rounded-lg p-6 border border-gray-200/40">
      <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg mb-6">
        Gen AI Analytics
      </h1>

      <QueryInput />
      <div className="mt-6">
        <QueryHistory />
      </div>
      <div className="mt-6">
        <QueryResults />
      </div>
    </div>
  </div>
    
  )
}

export default App

import { useState,useRef,useEffect,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }
     setPassword(pass)

    
  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

   useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div className="w-full max-w-md mx-auto backdrop-blur-lg bg-gray-800/70 shadow-2xl rounded-2xl px-6 py-6 text-orange-400 border border-gray-700">
    
    <h1 className="text-white text-2xl font-bold text-center mb-6 tracking-wide">
      🔐 Password Generator
    </h1>

    {/* Input + Copy button */}
    <div className="flex shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-700">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 bg-gray-900/60 text-white placeholder-gray-400"
        placeholder="Generated Password"
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
        className="
          bg-blue-600 text-white font-semibold 
          px-5 py-2 transition-all duration-300
          hover:bg-blue-700 hover:scale-110 
          active:scale-95 
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
      >
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          Length: <span className="font-bold">{length}</span>
        </label>
        <input 
          type="range"
          min={6}
          max={32}
          value={length}
          className="cursor-pointer w-2/3 accent-blue-500"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          className="accent-blue-500"
          onChange={() => setNumberAllowed(prev => !prev)}
        />
        <label htmlFor="numberInput" className="cursor-pointer">Include Numbers</label>
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={charAllowed}
          id="characterInput"
          className="accent-blue-500"
          onChange={() => setCharAllowed(prev => !prev)}
        />
        <label htmlFor="characterInput" className="cursor-pointer">Include Symbols</label>
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default App

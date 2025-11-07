import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
        <button onClick={() => setColor("red")} > Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </>

  )
}

export default App

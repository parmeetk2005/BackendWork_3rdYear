import { useState, useRef } from "react"
import { useEffect } from "react"

function App() {
  // useEffect why we use??? -> it is a hook and is use to do side effect in react (mounting, unmounting and update are in useEffect)
  let [ws, setWs] = useState(null);
  let inputRef = useRef() // store any dom element reference, and it is difference from useState bcz it does not trigger re-rendering of the component
    useEffect(()=>{
      const socket = new WebSocket("ws://localhost:8888")
      socket.onmessage = ((e)=>{
        console.log(e.data);
      })
      setWs(socket);
    },[]);
    function sendMessage(){
      let message = inputRef.current.value;
      ws.send(message);
      inputRef.current.value = "";
    }
  return (
    <>
      <h1>Ping Pong</h1>
      <input ref = {inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App

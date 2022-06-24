import { useEffect, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  const [isDC, setIsDC] = useState(false)

  const connectionCheking = () => {
    const condition = navigator.onLine ? "online": "offline"
    if(condition === "online"){
      setInterval(() => {
        fetch("//google.coom", {
        mode: "no-cors"
      }).then(() => setIsDC(false)).catch(() => setIsDC(true))
      }, 5000);
      return;
    }
    return setIsDC(false)
  }
  useEffect(() => {
    window.addEventListener('online', connectionCheking())
    window.addEventListener('offline', connectionCheking())
  }, [])
  return isDC ? <h1 style={{"textAlign": "center"}}>KONEKSI KAMU TERPUTUS</h1>: <SearchPokemon/>
  // return <SearchPokemon /><SearchPokemon />
}

export default App;

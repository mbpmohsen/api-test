import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

const baseUrl = import.meta.env.VITE_SOME_KEY;
function App() {
    const handleDispatchRequest = () => {
      axios.post(`${baseUrl}/test`).then(console.log).catch(console.error);
    }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>API TEST</h1>
      <div className="card">
        <button onClick={handleDispatchRequest}>
          Dispatch !
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is only for test between client and server
      </p>
    </>
  )
}

export default App

const name = import.meta.env.VITE_NAME;
const company= import.meta.env.VITE_COMPANY;

const hosting = import.meta.env.VITE_HOSTING;
import './App.css'

function App() {
  

  return (
    <div className="App">
            <h1>
                Hi, I am {name}
            </h1>
            <h1>
                I work in {company}
            </h1>
            <h2>
                Here we are hosting this website on 
                {hosting}
               </h2>
        </div>
  )
}

export default App

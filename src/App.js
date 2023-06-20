import Home from "./Home";
import {Routes,Route} from 'react-router-dom'
import Page from "./Page";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/page' element={<Page/>}/>
      </Routes>
    </div>
  );
}

export default App;

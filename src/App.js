import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Playlist from "./components/playlist.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Playlist/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

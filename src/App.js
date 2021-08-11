import { MemoryRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

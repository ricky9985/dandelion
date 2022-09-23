import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

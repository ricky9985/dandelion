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
            >
              {route.nested && route.nested.map((nRoute) => {
                if(nRoute.type === 'index'){
                  return (
                    <Route index element={<nRoute.component />} />
                  )
                }
                return <Route
                  key={nRoute.path}
                  path={nRoute.path}
                  element={<nRoute.component />}
                />
              })}
            </Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

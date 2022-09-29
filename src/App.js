import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import './App.css';
import ScrollToTop from "./components/scroll-top";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          {routes.map((route, rIn) => (
            <Route
              key={`${route.path}-${rIn}`}
              path={route.path}
              element={<route.component />}
            >
              {route.nested && route.nested.map((nRoute, nIn) => {
                if (nRoute.type === 'index') {
                  return (
                    <Route key={`${route.path}-${nIn}`} index element={<nRoute.component />} />
                  )
                }
                return <Route
                  key={`${route.path}-${nIn}`}
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

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { LoadingProvider } from "./contexts/LoadingContext/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;

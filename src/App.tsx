import { Provider } from "react-redux";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

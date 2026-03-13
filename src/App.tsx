import { Provider } from "react-redux";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import store from "./store";
import GameLobby from "./pages/GameLobby";
import GameRoom from "./pages/GameRoom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/lobby" element={<GameLobby />} />
            <Route path="/game/:id" element={<GameRoom />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import store from "./store";
import GameLobby from "./pages/GameLobby";
import GameRoom from "./pages/GameRoom";
import ProtectedRoute from "./components/ProtectedRoute";
import ConnectWallet from "./pages/ConnectWallet";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ConnectWallet />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/game-lobby" element={<GameLobby />} />
            <Route path="/game/:id" element={<GameRoom />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

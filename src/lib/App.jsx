import { BrowserRouter } from "react-router-dom";
import "../ui/styles/App.css";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

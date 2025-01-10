import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../ui/base/fonts.css";
import "../ui/styles/App.css";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../ui/theme/theme";
import { CssBaseline } from "@mui/material";
import Panel from "./pages/Panel";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {/* <div className=""></div> */}
          <Routes>
            <Route path="/" element={<Panel />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

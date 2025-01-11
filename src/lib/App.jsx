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
import Apiaries from "./pages/Apiaries";
import Users from "./pages/Users";
import Details from "./pages/Details";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {/* <div className=""></div> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Panel />}>
              <Route path="/apiaries" element={<Apiaries />}></Route>
              <Route path="/panel" element={<Users />} />
              <Route path="/apiaries/details/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

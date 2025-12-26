import "./App.css";
//import Home from "./component/HomePage/Home";
//import { Navbar } from "./component/NavBar/Navbar";
import { darkTheme } from "./component/Theme/DarkTheme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
//import ResturantDetails from "./component/Resturant/ResturantDetails";
//import Cart from "./component/Cart/Cart";
//import Profile from "./component/Profile/Profile";
import CustomerRouter from "./Routers/CustomerRouter";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home />
      <ResturantDetails />
      <Cart /> */}

      {/* <Profile /> */}
      <CustomerRouter />
    </ThemeProvider>
  );
}

export default App;

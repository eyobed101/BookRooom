import React from "react";
import { Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar.";
import { orange } from "@mui/material/colors";
import Rooms from "./pages/Rooms";


const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Navbar />
      

      
        <Routes>
          {/* <Route exact path="/" component={LandingPage} /> */}
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* <Route exact path="/register" component={RegisterPage} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          {/* <Route exact path="/rooms" component={Rooms} /> */}
          {/* <Route exact path="/rooms/:slug" component={SingleRoom} /> */}
          {/* <Route exact path="/booknow" component={PaymentForm} /> */}
          {/* <Route component={Error} /> */}
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;

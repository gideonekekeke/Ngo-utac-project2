import logo from "./logo.svg";
import "./App.css";
import Event from "./Event/Event";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactUs from "./Contact/ContactUs";
import React from "react";
import Blog from "./Blogpage/Blog/Blog";
import HomeScreen from "./Home/Build/HomeScree";
import NavBar from "./NavBar";
import Footer from "./Home/Build/Footer";
import SideBar from "./SideBar/SideBar";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/event" exact component={Event} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

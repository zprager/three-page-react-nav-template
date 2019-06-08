import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import GetInvolved from "../../pages/GetInvolved";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { name: "Home", active: true, to: "/" },
        { name: "About", active: false, to: "/about" },
        { name: "Get Involved", active: false, to: "/get-involved" }
      ]
    };
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav(nav) {
    console.log("clicked ");
    const { navItems } = this.state;
    navItems.map(item => {
      item.name === nav ? (item.active = true) : (item.active = false);
    });
    this.setState(navItems);
  }
  render() {
    return (
      <Router>
        <ul class="nav nav-tabs">
          {this.state.navItems.map(item => (
            <li onClick={() => this.handleNav(item.name)} class={`nav-item `}>
              <Link
                class={`nav-link ${item.active ? "active" : ""}`}
                to={item.to}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/get-involved" exact component={GetInvolved} />
      </Router>
    );
  }
}

export default Navigation;

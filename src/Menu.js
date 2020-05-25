import React, { Component } from "react";

class Menu extends Component {
  render() {
    let linksMarkup = this.props.links.map((link, index) => {
      return (
        <li className="menu__list-item">
          <a className="menu__link" href={link.link}>
            {link.label}{" "}
          </a>{" "}
        </li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <nav className="menu">
            <div className="menu__link"> Delivery Service</div>
            <div className="menu__right">
              <ul className="menu__list">{linksMarkup}</ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Menu;

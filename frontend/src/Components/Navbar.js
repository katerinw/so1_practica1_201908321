import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './Navbar.css';

//Components
import SearchAuto from "../Auto/SearchAuto";

export default class Navbar extends Component {
  state = { activeItem: 'actividad' }

  saved = localStorage.getItem("User");
  initial = JSON.parse(this.saved);

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  eliminarLocalStorage = (data) => {
    localStorage.removeItem("User");
  }

  render() {
    const { activeItem } = this.state

    const estiloMarca = {
      position: 'absolute',
      margin: '1% 0 0 0',
      left: '1000px',
    };

    return (
      <div className="navbar">
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item>
              <SearchAuto nameButton="Marca"/>
            </Menu.Item>
            <Menu.Item>
              <SearchAuto nameButton="Modelo"/>
            </Menu.Item>
            <Menu.Item>
              <SearchAuto nameButton="Color"/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
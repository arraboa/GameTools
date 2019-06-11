import React from "react";
import { Switch, Route, NavLink, withRouter, Redirect } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import CharacterGenerator from "./CharacterGenerator/CharacterGenerator.jsx";
import WowTable from "./Wow/WowTable";
import FireEmblem from "./FireEmblem/FireEmblem";

const routes = [
  {
    key: 0,
    path: "/characterGenerator",
    component: CharacterGenerator,
    icon: "add circle",
    title: "Character Generator"
  },
  {
    key: 1,
    path: "/fireemblem",
    component: FireEmblem,
    icon: "fire",
    title: "Fire Emblem"
  },
  {
    key: 2,
    path: "/wow",
    component: WowTable,
    icon: "gamepad",
    title: "wow"
  }
];

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ok: "ok" };
  }

  renderRoute = (key, path, component) => (
    <Route path={path} component={component} key={key} />
  );

  renderMenuItem = (key, path, icon, title) => (
    <NavLink exact to={path} key={key}>
      <Menu.Item active={path === this.props.location.pathname}>
        <Icon name={icon} />
        {title}
      </Menu.Item>
    </NavLink>
  );

  render() {
    return (
      <div>
        {this.props.location.pathname === "/" && (
          <Redirect to={routes[0].path} push />
        )}
        <Menu icon="labeled" inverted fixed="top">
          {routes.map(route =>
            this.renderMenuItem(route.key, route.path, route.icon, route.title)
          )}
        </Menu>

        <div
          style={{
            marginTop: "4em",
            padding: "4em",
            flex: "1"
          }}
        >
          <Switch>
            {routes.map(route =>
              this.renderRoute(route.key, route.path, route.component)
            )}
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(MainPage);
